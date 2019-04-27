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

var mousedownbegin, lastTouched, touchtimer;

function handleMousedown(event) {
    event.preventDefault();
    switch (event.which) {
        case 1: //left mouse button
        window.clearTimeout(touchtimer);
        mousedownbegin = (new Date()).getTime();
        lastTouched = $(this);
        touchtimer = window.setTimeout("checkLongTouch(true)" ,500);
        break;

//		case 2: //middle mouse button
//		break;

//		case 3: //right mouse button
//		break
    }
}

function handleMouseup(event) {
    event.preventDefault();
    switch (event.which) {
        case 1: //left mouse button
        window.clearTimeout(touchtimer);
        checkLongTouch(false);
        break;

        case 3: //right mouse button
        updatePoints($(this), -1);
        break;
    }
}

function checkLongTouch(fromTimer) {
    if (lastTouched !== null) {
        if (fromTimer === true) {
            updatePoints(lastTouched, -1);
            updatePoints(lastTouched, -1);
            updatePoints(lastTouched, -1);
            updatePoints(lastTouched, -1);
            updatePoints(lastTouched, -1);
        }
        else {
            updatePoints(lastTouched, 1);
        }
        lastTouched = null;
    }
}

function updatePoints(skillManage, change) {
    var tree = skillManage.parent().parent();
	var thisLevel = parseInt(skillManage.parent().attr("data-level"));
	var invested = parseInt(skillManage.parent().attr("data-invested"));
	var tierTotal = parseInt(skillManage.parent().attr("data-total"));
	var treeTotal = parseInt(tree.find("span.totalPoints").text());
	var points = parseInt(skillManage.attr("data-points"));
	var max = parseInt(skillManage.attr("data-max"));
    var charLevel = parseInt($("span.charLevel").text());

    if(change > 0) {
        if (points < max && treeTotal >=)
    }
}