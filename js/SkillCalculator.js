//////////////////////////////////////////////////////////////////////
//                           __                                     //
//                      ,-'`` .'                                    //
//       /`.           /   .'`    .-;   .-.                         //
//      /   \          |   \_  _,' /-,_  \ `.                       //
//     / _ .-'    _.---:.    `'    _.-'_.'   )                      //
//     '` \\   ,;'               .  \ `     ,'                      //
//         ')    `7_,             `'-;   .-"-.._                    //
//        //   ,;-"`        .-'". ,-.        _.f`                   //
//      .'/   .-"`\ _      .-'`\ \ _ `"-       >                    //
//     / /   /    /` \   ,'     ; / `'.      ,-'"-.                 //
//    |  |  |     \   \ /       |;     \   ,'      `.               //
//    \   '.;      `.  \,-.     ||       _/         |               //
//_bw__`.___\\    / L\  \  \._O_;|O__ .'`          /________________//
//            `.  |  `'-.(  | _..--''/         _.-`                 //
//              `-.`.__.p \v-'       \_/  ,  ;`          /.         //
//           '.----'L__p\ '.          v|  |   \ `'-._   /  \        //
//             `.   '.__b\  \       _~  v-'`v-' ,\'  `.'   |        //
//               `.       `<~|   .-'  ,' _ _."'`   _.'     /        //
//                 `.       `' '_,-''  ,.-''`-  _.'      .'         //
//                   `.       \'  _,,="      ,-'     _.-'           //
//                     `.         _  __ _.-'     _.-'               //
//                       `.      `. `  `     _.-'                   //
//                         `.      \     _.-'                       //
//                           `.     |_.-'                           //
//                             `-._.'                               //
// Please don't mess with this unless you know what you're doing    //
//////////////////////////////////////////////////////////////////////

//global vars
const TotalSkillPoints = 30;
const MaxPlayerLevel = 31;
const MaxNrOfSpecializations = 2;
var currentNrOfSpecializations;
const DefaultPlayerClass = "&nbsp;";
var SkillPointsSpent;

var activeSpecializationElement = null;

const SkillTypeSorter = {
    'COMBAT': 1, // 0 is apparently odd in JS sometimes, so we start at 1.
    'SUPPORT': 2,
    'SURVIVAL': 3,
    'TECH': 4
}

//skill node array
var SkillNodeElements =
{
    'COMBAT': {},
    'SUPPORT': {},
    'SURVIVAL': {},
    'TECH': {}
};

//elements
var PlayerClass;
var PlayerLevel;
var SkillPointsLeft;
var SkillName;
var SkillDescription;
var SkillThumb;



function InitOnLoad() {

    PlayerClass = document.getElementById("PlayerClass");
    PlayerLevel = document.getElementById("PlayerLevel");
    SkillPointsLeft = document.getElementById("SkillPointsLeft");
    SkillName = document.getElementById("SkillName");
    SkillDescription = document.getElementById("SkillDescription");
    SkillThumb = document.getElementById("SkillThumb");
    currentNrOfSpecializations = 0;
    PlayerClass.innerHTML = DefaultPlayerClass;

    UpdatePlayerStats();

    //setup skill nodes
    SetupSkillTree(document.getElementById("CombatSkillTree"));
    SetupSkillTree(document.getElementById("SupportSkillTree"));
    SetupSkillTree(document.getElementById("SurvivalSkillTree"));
    SetupSkillTree(document.getElementById("TechSkillTree"));

    //populate skills from parameter
    var url_string = window.location.href
    var url = new URL(url_string);
    var skillParam = url.searchParams.get("skills");

    if (skillParam !== null) {
        PopulateSkillsFromParam(skillParam);
    }

}

function PopulateSkillsFromParam(param) {
    var skillData = param.split("-");
    var allSkillNodes = document.getElementsByClassName("skillNode");

    if (skillData.length - allSkillNodes.length < 0 ||
        skillData.length - allSkillNodes.length > 1) {
        return;
    }

    for (let i=0; i < allSkillNodes.length; i++) {
        let rank = parseInt(skillData[i]);

        if (isNaN(rank)) {
            break;
        }

        if (rank > 0) {
            onLeftClick(allSkillNodes[i], rank);
        }

    }

    //we have a spec skill
    if (skillData.length > allSkillNodes.length) {
        var nodeIndex = skillData[skillData.length - 1];
        onLeftClick(allSkillNodes[nodeIndex], 0);
    }

}

function SaveBuild() {
    var allSkillNodes = document.getElementsByClassName("skillNode");

    var url_string = window.location.href.split('?')[0];
    var url = new URL(url_string);

    var param = "";
    var specIndex = -1;

    for (let i=0; i < allSkillNodes.length; i++) {

        var counter = allSkillNodes[i].getElementsByClassName("rankIndicator")[0];
        var counterElements = counter.getElementsByTagName('span');
        var currentRankElement = counterElements[0];

        var rank = parseInt(currentRankElement.innerHTML)

        if (allSkillNodes[i].classList.contains("specialization") && specIndex == -1) {
            var skillData = skillDictionary[allSkillNodes[i].dataset.key];
            if (skillData.PlayerClassName == PlayerClass.innerHTML) {
                specIndex = i;
            }
        }

        param += rank + "-";
    }

    //add specIndex last. might need to change if we ever get specializations with more than 1 rank..
    if (specIndex != -1) {
        param += specIndex;
    }
    else {
        //remove trailing -
        param = param.substring(0, param.length - 1);
    }

    url.searchParams.append("skills", param);

    const el = document.createElement('textarea');
    el.value = url;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function UpdatePlayerStats() {

    if (SkillPointsSpent === undefined) {
        SkillPointsSpent = 0;
    }

    var level = SkillPointsSpent + 1;
    var skillPointsLeft = TotalSkillPoints - SkillPointsSpent;

    if (level > MaxPlayerLevel) {
        level = MaxPlayerLevel;
    }

    PlayerLevel.innerHTML = level;
    SkillPointsLeft.innerHTML = skillPointsLeft;
}

function SetupSkillTree(tree) {

    if (tree === undefined) {
        alert("Error: No tree");
        return;
    }

    //get the keyprefix stored in the tree div
    var keyPrefix = tree.dataset.keyPrefix;

    //make sure it exist.
    if (keyPrefix === undefined) {
        alert("Error: No key Prefix for tree: " + tree);
        return;
    }

    //get all skillnode objects in this tree. the order returned will always be top -> bottom, starting with the "left" path. 
    var skillNodes = tree.getElementsByClassName("skillNode");

    var nrOfNodes = skillNodes.length;
    var nodesPerTree = nrOfNodes / 2;
    //root 1 is always element 0, so now we must find root 2
    var root2 = nodesPerTree; //sinse index start at 0 this will get the first element in path 2 (right one)

    //init the elementNodeList
    var nodeElementArray = new Array(nrOfNodes);

    for (let i=0; i < nrOfNodes; i++) {
        var key = keyPrefix + "_" + (i + 1);

        skillNodes[i].setAttribute("data-key", key.toUpperCase());
        skillNodes[i].classList.add(keyPrefix);

        //lock all non-roots
        if (i != 0 && i != root2) {
            skillNodes[i].classList.add("locked");
        }

        //create and add the rank counter
        var div = document.createElement("div");
        div.classList.add("rankIndicator");
        div.classList.add("hidden");
        var maxRank = skillDictionary[key.toUpperCase()].MaxRank;
        var currentRank = 0;
        div.innerHTML = '<div><span name="currentRank">' + currentRank + '</span> / <span name="maxRank">' + maxRank + '</span></div>';
        skillNodes[i].appendChild(div);

        //add onEnter eventhandler
        skillNodes[i].addEventListener("mouseenter", function (e) {
            var skillNode = e.target;
            var key = skillNode.dataset.key;

            var skillData = skillDictionary[key];
            SetSkillDetails(skillData);

        });

        //add leftClick eventhandler
        skillNodes[i].addEventListener("click", function (e) {
            onLeftClick(e.currentTarget, 1);
        });

        //add rightClick eventhandler
        skillNodes[i].addEventListener('contextmenu', function (e) {
            e.preventDefault();
            if (e.which == 3) {
                onRightClick(e.currentTarget);
            }
            return false;
        }, false);

        //add skill to element array
        nodeElementArray[i] = skillNodes[i];
    }

    //add array
    SkillNodeElements[keyPrefix.toUpperCase()] = nodeElementArray;

}

//this happens when you right click a skill
function onRightClick(skill) {

    var counter = skill.getElementsByClassName("rankIndicator")[0];
    var counterElements = counter.getElementsByTagName('span');
    var currentRankElement = counterElements[0];

    var currentRank = parseInt(currentRankElement.innerHTML)

    if (currentRank > 0) {

        var indexobj = GetIndexFromNode(skill);

        var elementList = SkillNodeElements[indexobj[0]];
        var i = parseInt(indexobj[1]);

        //check if the next nodes counter is hidden. - if so do nothing
        if (currentRank == 1 &&
            !skill.classList.contains("specialization") &&
            !elementList[i].getElementsByClassName("rankIndicator")[0].classList.contains("hidden")) {
            return;
        }

        SkillPointsSpent--;
        currentRank--;
        currentRankElement.innerHTML = currentRank;

        if (currentRank == 0) {

            //hide the counter
            counter.classList.add("hidden");

            //remove active status from skill
            skill.classList.remove("active");



            if (skill.classList.contains("specialization")) {

                if (activeSpecializationElement != null && activeSpecializationElement == skill) {
                    //we need to update class
                    //get all of 
                }

                PlayerClass.innerHTML = DefaultPlayerClass;
                currentNrOfSpecializations--;
            }
            else {
                //lock the next rank
                elementList[i].classList.add("locked");
            }
        }

        UpdatePlayerStats();
    }
}

//this happens when you right click a skill
function onLeftClick(skill, nrToAdd) {
    //no skill points left? do nothing
    if ((TotalSkillPoints - (SkillPointsSpent + nrToAdd)) < 0) {
        return;
    }

    //we have points
    var counter = skill.getElementsByClassName("rankIndicator")[0];
    var counterElements = counter.getElementsByTagName('span');
    var currentRankElement = counterElements[0];
    var maxRankElement = counterElements[1];

    var currentRank = parseInt(currentRankElement.innerHTML)
    var maxRank = parseInt(maxRankElement.innerHTML)

    if (skill.classList.contains("specialization") && (currentNrOfSpecializations >= MaxNrOfSpecializations)) {
        if (currentRank <= 0) {
            return;
        }
        //update spec?
        else {
            var skillData = skillDictionary[skill.dataset.key];
            PlayerClass.innerHTML = skillData.PlayerClassName;
        }
    }

    if (currentRank + nrToAdd <= maxRank &&
        !skill.classList.contains("locked")) {
        if (currentRank == 0) {
            //show the indicator
            counter.classList.remove("hidden");

            //add active status to skill
            skill.classList.add("active");

            //unlock next rank if this is not a specialization skill.
            if (!skill.classList.contains("specialization")) {

                var indexobj = GetIndexFromNode(skill);

                var elementList = SkillNodeElements[indexobj[0]];
                var i = parseInt(indexobj[1]);

                elementList[i].classList.remove("locked");
            }
            else {
                //it is a spec skill. make sure we can only have one!
                currentNrOfSpecializations++;
                var skillData = skillDictionary[skill.dataset.key];
                PlayerClass.innerHTML = skillData.PlayerClassName;
            }
        }
        skill.classList.remove("locked");

        SkillPointsSpent += nrToAdd;
        currentRank += nrToAdd;
        currentRankElement.innerHTML = currentRank;

        UpdatePlayerStats();
    }

}

function GetIndexFromNode(node) {
    var key = node.getAttribute("data-key");
    //key has format TYPE_INDEX, example COMBAT_1
    var index = key.split("_");

    return index;
}

//skilldata is defined in SkillTable.js
function SetSkillDetails(skillData) {

    SkillName.innerHTML = skillData.Name;
    SkillDescription.innerHTML = skillData.Description;
    SkillThumb.src = skillData.ImgPath;
}

