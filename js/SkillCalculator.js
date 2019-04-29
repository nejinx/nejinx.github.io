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
// --BiddinWar                                                      //
//////////////////////////////////////////////////////////////////////




//global vars
const TotalSkillPoints = 31;
const MaxPlayerLevel = 31;
var SkillPointsSpent;


//elements
var PlayerClass;
var PlayerLevel;
var SkillPointsLeft;
var SkillName;
var SkillDescription;

var AllskillNodes;



function InitOnLoad() {

    PlayerClass = document.getElementById("PlayerClass");
    PlayerLevel = document.getElementById("PlayerLevel");
    SkillPointsLeft = document.getElementById("SkillPointsLeft");
    SkillName = document.getElementById("SkillName");
    SkillDescription = document.getElementById("SkillDescription");

    UpdatePlayerStats();

    //setup skill nodes
    SetupSkillTree(document.getElementById("CombatSkillTree"));
    SetupSkillTree(document.getElementById("SupportSkillTree"));
    SetupSkillTree(document.getElementById("SurvivalSkillTree"));
    SetupSkillTree(document.getElementById("TechSkillTree"));

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

    var i;
    for (i = 0; i < nrOfNodes; i++) {
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
        div.innerHTML = '<span name="currentRank">' + currentRank + '</span>/<span name="maxRank">' + maxRank + '</span>';
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
            onLeftClick(e.currentTarget);
        });

        //add rightClick eventhandler
        skillNodes[i].addEventListener('contextmenu', function (e) {
            e.preventDefault();
            if (e.which == 3) {
                onRightClick(e.currentTarget);
            }
            return false;
        }, false);


    }
}

//this happens when you right click a skill
function onRightClick(skill) {

    var counter = skill.getElementsByClassName("rankIndicator")[0];
    var counterElements = counter.getElementsByTagName('span');
    var currentRankElement = counterElements[0];

    var currentRank = parseInt(currentRankElement.innerHTML)

    if (currentRank > 0) {

        SkillPointsSpent--;
        currentRank--;
        currentRankElement.innerHTML = currentRank;

        if (currentRank == 0) {
            //hide the indicator
            counter.classList.add("hidden");

            //lock the skill
            skill.classList.add("locked");

            //lock the next ranks
        }
        

        UpdatePlayerStats();
    }
}

//this happens when you right click a skill
function onLeftClick(skill) {

    //no skill points left? do nothing
    if (TotalSkillPoints - SkillPointsSpent <= 0) {
        return;
    }

    //we have points
    var counter = skill.getElementsByClassName("rankIndicator")[0];
    var counterElements = counter.getElementsByTagName('span');
    var currentRankElement = counterElements[0];
    var maxRankElement = counterElements[1];

    var currentRank = parseInt(currentRankElement.innerHTML)
    var maxRank = parseInt(maxRankElement.innerHTML)

    if (currentRank < maxRank) {

        if (currentRank == 0) {
            //show the indicator
            counter.classList.remove("hidden");

            //unlock the next ranks
        }
        skill.classList.remove("locked");

        SkillPointsSpent++;
        currentRank++;
        currentRankElement.innerHTML = currentRank;

        UpdatePlayerStats();
    }

}

//skilldata is defined in SkillTable.js
function SetSkillDetails(skillData) {

    SkillName.innerHTML = skillData.Name;
    SkillDescription.innerHTML = skillData.Description;
}

