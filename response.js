function getBotResponse(input) {
    if (input == "Fever" || input == "fever") {
        return "🥴 Take care and Please maintain a distance to family 🛌 ..";
    }
    else if (input == "Cold" || input == "cold" || input == "sardi-jukam") {
        return "😰 You have problem 🛌 to smell  🤧,breathing and Tasting 🤮 .❔";

    }
    else if (input == "breathing") {
        return "💔 Please Check your  oxygen level and Procations Your Drs.👨‍⚕️..  ⁉";
    }
    else if (input == "no smell" || input == "no taste" || input == "No Taste" || input == "No Smell") {
        return "You need to Check up and you need Procations📋  🛌";
    }
    else if (input == "smell" || input == "Smell" || input == "😙") {
        return "To Good You have Smell. Take 😙 Care  🛌.";
    }
    else if (input == "Tasting" || input == "tasting") {
        return "To Good You have Taste. Take 😙 Care  🛌.";
    }
    else if (input == "Cough" || input == "cough") {
        return "You have need 👨‍⚕️ Drs...";
    }
    else if (input == "no" || input == "No") {
        return "🤮 Viral Please Take Care and Advice to your 👨‍⚕️  🏥 Doctor 👍 🛌.";
    }
    else if (input == "good" || input == "Good" || input == "🙂") {
        return "🥰	Thats Nice.";
    }
    else if (input == "better" || input == "Better" || input == "😘") {
        return "😙 Take Care !.";

    }
    else if (input == "normal" || input == "Normal" || input == "😑") {
        return "Ok 😷 Take Care And Stay Home 🏡.";
    }
    else if (input == "occured" || input == "Occured" || input == "😌") {
        return "Why ❓ please check it .";
    }
    else if (input == "not feel good" || input == "Not Feel Good" || input == "🤯") {
        return "Please ! check 🏥 Health Status 👨‍⚕️ . "
    }
    else if (input == "I am corona Positive" || input == "corona positive" || input == "positive" || input == "i am corona positive") {
        return "Please ! You have Quarintine 🏡." + " \n" + "Please Keep Distence." + "\n " + "Proper Mask 😷."
            + "🏥 Health Advice Drs.👨‍⚕️ . ";
    }
    else if (input == "Divanshu kon hai" || input == "Himanshu kon hai") {
        return "Topper 🤯 and Inteligent .";
    }
    else if (input == "Himanshu Hobby" || input == "hobby") {
        return "Music listening 🎧,chess";
    }
    else if (input == "Divanshu ka phla pyar") {
        return "Coding ";
    }
    else if (input == "😀" || input == "😃" || input == "😁" || input == "😆" || input == "😅" || input == "🤣" || input == "😂") {
        return "Have a Nice Day.";
    }
    else if (input == "🙂" || input == "🙃" || input == "😉" || input == "😊" || input == "😇" || input == "😄") {
        return "You are cute.";
    }
    else if (input == "🥰" || input == "😍" || input == "😘") {
        return "Kisse Pyar ho gya. ❓";
    }
    else if (input == "😤" || input == "😡" || input == "😠") {
        return "Tu Gussa mt kiya kr or Cute Lgta hai😘.";
    }
    else if (input == "😋" || input == "😛" || input == "😜" || input == "🤪" || input == "😝" || input == "🤑") {
        return "Please Maintain a Diciplane.juwan pe lgam de or jake tatti💩 chate dimag nhi .";
    }
    else if (input == "🤔") {
        return "Tu kya soch rha ❓.Tu socha🤯 mt kr sochne ki liye dimag chahiye bo to tere pass hai nhi😆.";
    }
    else if (input == "😴") {
        return "Shi hai tu sirf So Tu to nlla hai.";
    }
    else if (input == "🥺") {
    return "Kya hua ❓";
    }
    else if(input=="😈"||input=="👿"){
return "Don't be Angry👿 .This is effect to your life and heart💔."
    }
    else if(input=="🖕"|| input=="sex"|| input=="Sex"){
        return "Tujh se Na ho payega.🖕 ise apne me lele.";
    }
    else if(input=="hii"|| input=="Hi" || input=="hi"){
        return "Hii How are You ?";
    }
    else if (input == "😕" || input == "😟" || input == "🙁" || input == "☹") {
        return "Don't be said.Think be Positive ";
    }
    else if (input == "😢" || input == "😭" || input == "😱" || input == "😖" || input == "😫" || input == "😩" || input == "😓") {
        return "Kya Hua Bndi ne kata ❓ kata ho to dukhi na ho💩 .tera to hai hi nhi.";
    }
    else if (input == "mc" || input == "bc" || input == "Mc" || input == "	Bc" || input == "bsdk" || input == "Bsdk") {
        return "Please Maintain a Diciplane.juwan pe lgam de or jake tatti💩 chate dimag nhi .";
    }
    else if (input == "" || input == "" || input == "" || input == "" || input == "" || input == "") {
        return "Please Maintain a Diciplane.juwan pe lgam de or jake tatti💩 chate dimag nhi .";
    }
    else if (input == "Interest") {
        return "😴";
    }
    if (input == "Gidelines" || input == "gidelines" || input == "corona se kese bche") {
        return "🚫 Don't leave home without work.. ❓ 🙏 please Maintan  2 meter distance 😷." + "\n 🌍 " + " ⚠ Go out of the house only when there is important work 👍." + "\n 🔒 " + "🏡 👪 Stay Home Stay Safe...👨‍👩‍👧‍👦";
    } else if (input == "Help" || input == "help") {
        return " 📱 +91-11-23978046" + " " + " 🤖 https://www.mygov.in/aarogya-setu-app";

    } else if (input == "hello" || input == "Hello") {
        return "Welcome! to our 🏥 Health Advice 👨‍⚕️...";
    }
    else {
        return "🧘 try asking ! something else !";
    }
}
