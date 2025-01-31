export default class ClientProt {
    static readonly REBUILD_GETMAPS: number = 150; // index: 4

    static readonly NO_TIMEOUT: number = 108; // index: 6 - NXT naming

    static readonly IDLE_TIMER: number = 70; // index: 30

    static readonly EVENT_TRACKING: number = 81; // index: 34
    static readonly EVENT_CAMERA_POSITION: number = 189; // index: 35 - NXT naming

    // autogenerated as part of obfuscation process
    static readonly ANTICHEAT_OPLOGIC1: number = 7; // index: 60
    static readonly ANTICHEAT_OPLOGIC2: number = 88; // index: 61
    static readonly ANTICHEAT_OPLOGIC3: number = 30; // index: 62
    static readonly ANTICHEAT_OPLOGIC4: number = 176; // index: 63
    static readonly ANTICHEAT_OPLOGIC5: number = 220; // index: 64
    static readonly ANTICHEAT_OPLOGIC6: number = 66; // index: 65
    static readonly ANTICHEAT_OPLOGIC7: number = 17; // index: 66
    static readonly ANTICHEAT_OPLOGIC8: number = 2; // index: 67
    static readonly ANTICHEAT_OPLOGIC9: number = 238; // index: 68

    // autogenerated as part of obfuscation process
    static readonly ANTICHEAT_CYCLELOGIC1: number = 233; // index: 70
    static readonly ANTICHEAT_CYCLELOGIC2: number = 146; // index: 71
    static readonly ANTICHEAT_CYCLELOGIC3: number = 215; // index: 74
    static readonly ANTICHEAT_CYCLELOGIC4: number = 236; // index: 72
    static readonly ANTICHEAT_CYCLELOGIC5: number = 85; // index: 75
    static readonly ANTICHEAT_CYCLELOGIC6: number = 219; // index: 73

    static readonly OPOBJ1: number = 140; // index: 80 - NXT naming
    static readonly OPOBJ2: number = 40; // index: 81 - NXT naming
    static readonly OPOBJ3: number = 200; // index: 82 - NXT naming
    static readonly OPOBJ4: number = 178; // index: 83 - NXT naming
    static readonly OPOBJ5: number = 247; // index: 84 - NXT naming
    static readonly OPOBJT: number = 138; // index: 88 - NXT naming
    static readonly OPOBJU: number = 239; // index: 89 - NXT naming

    static readonly OPNPC1: number = 194; // index: 100 - NXT naming
    static readonly OPNPC2: number = 8; // index: 101 - NXT naming
    static readonly OPNPC3: number = 27; // index: 102 - NXT naming
    static readonly OPNPC4: number = 113; // index: 103 - NXT naming
    static readonly OPNPC5: number = 100; // index: 104 - NXT naming
    static readonly OPNPCT: number = 134; // index: 108 - NXT naming
    static readonly OPNPCU: number = 202; // index: 109 - NXT naming

    static readonly OPLOC1: number = 245; // index: 120 - NXT naming
    static readonly OPLOC2: number = 172; // index: 121 - NXT naming
    static readonly OPLOC3: number = 96; // index: 122 - NXT naming
    static readonly OPLOC4: number = 97; // index: 123 - NXT naming
    static readonly OPLOC5: number = 116; // index: 124 - NXT naming
    static readonly OPLOCT: number = 9; // index: 128 - NXT naming
    static readonly OPLOCU: number = 75; // index: 129 - NXT naming

    static readonly OPPLAYER1: number = 164; // index: 140 - NXT naming
    static readonly OPPLAYER2: number = 53; // index: 141 - NXT naming
    static readonly OPPLAYER3: number = 185; // index: 142 - NXT naming
    static readonly OPPLAYER4: number = 206; // index: 143 - NXT naming
    static readonly OPPLAYERT: number = 177; // index: 148 - NXT naming
    static readonly OPPLAYERU: number = 248; // index: 149 - NXT naming

    static readonly OPHELD1: number = 195; // index: 160 - name based on runescript trigger
    static readonly OPHELD2: number = 71; // index: 161 - name based on runescript trigger
    static readonly OPHELD3: number = 133; // index: 162 - name based on runescript trigger
    static readonly OPHELD4: number = 157; // index: 163 - name based on runescript trigger
    static readonly OPHELD5: number = 211; // index: 164 - name based on runescript trigger
    static readonly OPHELDT: number = 48; // index: 168 - name based on runescript trigger
    static readonly OPHELDU: number = 130; // index: 169 - name based on runescript trigger

    static readonly INV_BUTTON1: number = 31; // index: 190 - NXT has "IF_BUTTON1" but for our interface system; this makes more sense
    static readonly INV_BUTTON2: number = 59; // index: 191 - NXT has "IF_BUTTON2" but for our interface system; this makes more sense
    static readonly INV_BUTTON3: number = 212; // index: 192 - NXT has "IF_BUTTON3" but for our interface system; this makes more sense
    static readonly INV_BUTTON4: number = 38; // index: 193 - NXT has "IF_BUTTON4" but for our interface system; this makes more sense
    static readonly INV_BUTTON5: number = 6; // index: 194 - NXT has "IF_BUTTON5" but for our interface system; this makes more sense
    static readonly IF_BUTTON: number = 155; // index: 200 - NXT naming

    static readonly RESUME_PAUSEBUTTON: number = 235; // index: 201 - NXT naming
    static readonly CLOSE_MODAL: number = 231; // index: 202 - NXT naming
    static readonly RESUME_P_COUNTDIALOG: number = 237; // index: 203 - NXT naming
    static readonly TUTORIAL_CLICKSIDE: number = 175; // index: 204

    static readonly MOVE_OPCLICK: number = 93; // index: 242 - comes with OP packets; name based on other MOVE packets
    static readonly BUG_REPORT: number = 190; // index: 243 - NXT naming
    static readonly MOVE_MINIMAPCLICK: number = 165; // index: 244 - NXT naming
    static readonly INV_BUTTOND: number = 159; // index: 245 - NXT has "IF_BUTTOND" but for our interface system; this makes more sense
    static readonly IGNORELIST_DEL: number = 171; // index: 246 - NXT naming
    static readonly IGNORELIST_ADD: number = 79; // index: 247 - NXT naming
    static readonly IF_PLAYERDESIGN: number = 52; // index: 248
    static readonly CHAT_SETMODE: number = 244; // index: 249 - NXT naming
    static readonly MESSAGE_PRIVATE: number = 148; // index: 250 - NXT naming
    static readonly FRIENDLIST_DEL: number = 11; // index: 251 - NXT naming
    static readonly FRIENDLIST_ADD: number = 118; // index: 252 - NXT naming
    static readonly CLIENT_CHEAT: number = 4; // index: 253 - NXT naming
    static readonly MESSAGE_PUBLIC: number = 158; // index: 254 - NXT naming
    static readonly MOVE_GAMECLICK: number = 181; // index: 255 - NXT naming
}
