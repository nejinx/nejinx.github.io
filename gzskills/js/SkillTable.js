
const skillThumbPath = "../img/skillThumbs/";

//dictionary with skill info
var skillDictionary =
{
    //=========================
    //  COMBAT LEFT TREE
    //=======================
    "COMBAT_1":
    {
        'Name': "AIM SPEED",
        'Description': "Increases the speed at which you aim down sights.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "aim_speed.png"
    },
    "COMBAT_2":
    {
        'Name': "HIP SHOT ACCURACY",
        'Description': "Lowers bullet spread when shooting from the hip.<br><br>Level 1: -5% spread<br><br>Level 2: -10% spread<br><br>Level 3: -15% spread",
        'MaxRank': 3,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_3":
    {
        'Name': "WEAPON RECOIL",
        'Description': "Decreases the amount of recoil when firing any weapon.<br><br>Level 1: -15% recoil<br><br>Level 2: -30% recoil",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_4":
    {
        'Name': "WEAPON SWAY",
        'Description': "Decreases the amount of weapon sway when aiming down sights.<br><br>Level 1: -15% weapon sway<br><br>Level 2: -30% weapon sway<br><br>Level 3: -45% weapon sway",
        'MaxRank': 3,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_5":
    {
        'Name': "MAKE 'EM COUNT",
        'Description': "Single shot fire with automatic weapons does more damage to components.<br><br>Level 1: +5% damage<br><br>Level 2: +10% damage",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_6":
    {
        'Name': "MARKSMAN",
        'Description': "While active, the Marksman specialization completely eliminates weapon sway when using any weapon.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Marksman",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  COMBAT RIGHT TREE
    //=======================
    "COMBAT_7":
    {
        'Name': "RELOAD SPEED",
        'Description': "Provides an increase to the speed of reloading weapons.<br><br>Level 1: -15% reload time<br><br>Level 2: -30% reload time",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_8":
    {
        'Name': "RUN AND GUN",
        'Description': "Lowers the negative spread impact of firing while moving.<br><br>Level 1: -10% spread<br><br>Level 2: -20% spread",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_9":
    {
        'Name': "ARMOR",
        'Description': "Provides an increase to your damage resistance.<br><br>Level 1: +10% bullet damage resistance<br><br>Level 2: +10% explosive damage resistance<br><br>Level 3: +10% gas damage resistance",
        'MaxRank': 3,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_10":
    {
        'Name': "ARMOR DAMAGE",
        'Description': "Increases amount of damage done to enemy armor.<br><br>Level 1: +5% damage<br><br>Level 2: +10% damage",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_11":
    {
        'Name': "TRIGGER HAPPY",
        'Description': "Increases amount of damage dealt when using automatic fire.<br><br>Level 1: +5% damage<br><br>Level 2: +10% damage",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "COMBAT_12":
    {
        'Name': "VANGUARD",
        'Description': "While active, the Vanguard specialization increases your damage resistance with 25%.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Vanguard",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  SUPPORT LEFT TREE
    //=======================
    "SUPPORT_1":
    {
        'Name': "THROW ACCURACY",
        'Description': "Increaes the accuracy of thrown items.<br><br>Level 1: +60% increased accuracy<br><br>Level 2: +100% increased accuracy",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_2":
    {
        'Name': "FLANKING",
        'Description': "Increases the chance of causing stagger when firing at an enemy that is targeting another player.<br><br>Level 1: +20% chance of stagger<br><br>Level 2: +40% chance of stagger",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_3":
    {
        'Name': "ENEMY MARKING",
        'Description': "Unlocks the ability to spot enemies using your binoculars. Spotting enemies will highlight them to all nearby players for a short period of time.<br><br>Level 1: 15-second highlight<br><br>Level 2: 30-second highlight<br>",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_4":
    {
        'Name': "DESIGNATED TARGET",
        'Description': "Enemies marked using your binoculars take additional damage.<br><br>Level 1: +5% damage<br><br>Level 2: +10% damage",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_5":
    {
        'Name': "LAST MAN STANDING",
        'Description': "Provides a boost to your damage resistance for every player (including yourself) that drops below 10% health. Including downed players.<br><br>Level 1: 5% damage resistance for 10 seconds.<br><br>Level 2: 10% damage resistance for 15 seconds.",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_6":
    {
        'Name': "COMMANDER",
        'Description': "While the Commander specialization is active, deployed Field Radios can be used an additional 3 times. (Total of 6 uses).<br><br>When any player uses your deployed Field Radio as a respawn or fast travel point, 1 use is subtracted.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Commander",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  SUPPORT RIGHT TREE
    //=======================
    "SUPPORT_7":
    {
        'Name': "THROW DISTANCE",
        'Description': "Increases the distance you can throw throwable items.<br><br>Level 1: +15% throwing distance<br><br>Level 2: +30% Throwing distance",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_8":
    {
        'Name': "HEALER",
        'Description': "Unlocks the ability to heal other nearby players with a first aid kit.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_9":
    {
        'Name': "VETERAN GUERILLA",
        'Description': "Increases the amount of base XP obtained when destroying a marked enemy.<br><br>Level 1: +20% base XP<br><br>Level 2: +40% base XP",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_10":
    {
        'Name': "HEAL AMOUNT",
        'Description': "Increases the healing amount when using first aid kits.<br><br>Level 1: +20% heal amount<br><br>Level 2: +40% heal amount<br><br>Level 3: +60% heal amount",
        'MaxRank': 3,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_11":
    {
        'Name': "REVIVE SPEED",
        'Description': "Lowers the time it takes to revive a downed player.<br><br>Level 1: 25% faster revive<br><br>Level 2: 50% faster revive",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SUPPORT_12":
    {
        'Name': "MEDIC",
        'Description': "While the Medic specialization is active, any player you revive (including yourself) returns to the game with 100% health.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Medic",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  SURVIVAL LEFT TREE
    //=======================
    "SURVIVAL_1":
    {
        'Name': "STAMINA AMOUNT",
        'Description': "Increases the maximum amount of stamina your character has.<br><br>Level 1: +25% stamina<br><br>Level 2: +50% stamina",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_2":
    {
        'Name': "RUNNING SPEED",
        'Description': "Increases the running and sprinting speed of your character.<br><br>Level 1: 15% faster <br><br>Level 2: 30% faster",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_3":
    {
        'Name': "CARRY CAPACITY",
        'Description': "Increase the inventory's maximum carry capacity for your character.",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_4":
    {
        'Name': "STEADY FEET",
        'Description': "Allows player to withstand stronger attacks without being knocked down.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_5":
    {
        'Name': "DOWN BUT NOT OUT",
        'Description': "Downed state timer is doubled, extending the time during which allies can revive you.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_6":
    {
        'Name': "SURVIVOR",
        'Description': "While the Survivor specialization is active, you may revive yourself once per combat encounter without the use of an adrenaline shot.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Survivor",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  SURVIVAL RIGHT TREE
    //=======================
    "SURVIVAL_7":
    {
        'Name': "STAMINA RECHARGE",
        'Description': "Increases your stamina recharge rate.<br><br>Level 1: 20% faster recharge<br><br>Level 2: 40% faster recharge",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_8":
    {
        'Name': "HEALTH AMOUNT",
        'Description': "Increases your maximum health.<br><br>Level 1: 10% health increase<br><br>Level 2: 20% health increase<br><br>Level 3: 30% health increase",
        'MaxRank': 3,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_9":
    {
        'Name': "VISIBILITY",
        'Description': "Decreases visibility to enemies.<br><br>Level 1: 20% less visible<br><br>Level 2: 40% less visible",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_10":
    {
        'Name': "MOVEMENT NOISE",
        'Description': "Decreases the noise you make by moving.<br><br>Level 1: 20% less noise<br><br>Level 2: 40% less noise",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_11":
    {
        'Name': "COVERT MOVEMENT SPEED",
        'Description': "Increases movement speed when not in a standing stance.<br><br>Level 1: 15% faster crouch speed.<br><br>Level 2: 30% faster crouch speed.",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "SURVIVAL_12":
    {
        'Name': "COMMANDO",
        'Description': "While the Commando specialization is active, the first damage dealt on any unaware enemy is increased by 15%.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Commando",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  TECH LEFT TREE
    //=======================
    "TECH_1":
    {
        'Name': "SPOTTING INTEL",
        'Description': "Increases the amount of information provided when spotting an enemy with the binoculars.<br><br>Level 1: Difficulty indicated<br><br>Level 2: Distance indicated",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_2":
    {
        'Name': "INQUISITIVE MIND",
        'Description': "Increases the amount of XP you earn for completing missions.<br><br>Level 1: +50% XP earned<br><br>Level 2: +100% XP earned",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_3":
    {
        'Name': "COMPONENT DAMAGE",
        'Description': "Increases the amount of damage done to enemy components.<br><br>Level 1: +5% damage<br><br>Level 2: +10% damage",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_4":
    {
        'Name': "EMP EXPERT",
        'Description': "Improves the impact of using EMP weaponry.<br><br>Level 1: +25% EMP area of effect<br><br>Level 2: +50% EMP area of effect",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_5":
    {
        'Name': "REMOTE HACKING",
        'Description': "Unlocks the ability to hack enemies. Allows you to hack enemies using your binoculars, confusing them temporarily.<br><br>Level 1: Hacked for 20 seconds<br><br>Level 2: hacked for 40 seconds",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_6":
    {
        'Name': "HACKER",
        'Description': "While the Hacker specialization is active, any remote hacking will cause enemies to attack other enemies.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Hacker",
        'ImgPath': skillThumbPath + "xxx.png"
    },
    //=========================
    //  TECH RIGHT TREE
    //=======================
    "TECH_7":
    {
        'Name': "CHEMIST",
        'Description': "Increases your base gas resistance by 10%.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_8":
    {
        'Name': "LOCKPICKING",
        'Description': "Unlocks the ability to unlock non-special locked doors using lockpick items.",
        'MaxRank': 1,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_9":
    {
        'Name': "SALVAGE",
        'Description': "Increases the amount of ammo found from in containers and when looting destroyed enemies.<br><br>Level 1: 50% ammo increase<br><br>Level 2: 100% ammo increase",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_10":
    {
        'Name': "MECHANIC",
        'Description': "Unlocks the ability to scavenge enemy components even if they are damaged.<br><br>Level 1: May scavenge up to 25% damaged components<br><br>Level 2: May scavenge up to 50% damaged components",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_11":
    {
        'Name': "EXPLOSIVES EXPERT",
        'Description': "Improves the damage caused by explosive weaponry.<br><br>Level 1: +10% explosive damage<br><br>Level 2: +30% explosive area of effect",
        'MaxRank': 2,
        'ImgPath': skillThumbPath + "xxx.png"
    },
    "TECH_12":
    {
        'Name': "ENGINEER",
        'Description': "While the Engineer specialization is active, the player may scavenge undamaged Tick Pods from enemies and use them to deploy Ticks that attack enemies.<br><br>Only one specialization may be active at a time.",
        'MaxRank': 1,
        'PlayerClassName': "Engineer",
        'ImgPath': skillThumbPath + "xxx.png"
    },


}
