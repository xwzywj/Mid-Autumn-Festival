const letterWords = [

"贾鑫，生日快乐 🎂",

"首先，祝你20岁生日快乐。",

"不知不觉，你已经20岁了。",
"竟然比我大2岁了。",

"其实我的语言表达能力不是特别好。",
"所以你就凑合看看吧。",

"虽然我们平时不经常聊天，",

"但我一直都认为，",
"你是我很好很好的朋友。",

"你之前给我写的那个小作文，",
"直到现在我还保存着。",

"那是我第一次收到这样一份认真写给我的祝福。",

"当时真的特别感动。",

"你已经很努力了，",
"我希望你在大学能快乐一点，",
"结交好朋友，",
"做自己喜欢的事情，",

"吃自己想吃的，",

"不过坐下来想想，",
"我其实并不是特别了解你。",

"我只知道，",
"你喜欢棕色。",

"而且，",
"还是一个很温柔的人。",

"我还是不说太多了。",

"信件很短人生很长，",

"希望我们以后还是好朋友，",

"我希望未来，",
"你一直能被温柔对待。",

"遇到对的人，",

"祝你你考研顺利，",
"成功上岸！",

"20岁生日快乐。",

"——关宏亮",

"后面还有一点内容你先别退"


];



let index = 0;





function openLetter(){


    

    let music = document.getElementById("bgm");

    if(music){

        music.volume = 0;

        music.play();


       

        let volume = 0;

        let fade = setInterval(()=>{

            volume += 0.05;

            music.volume = volume;


            if(volume >= 1){

                clearInterval(fade);

            }


        },200);

    }



    

    document
    .getElementById("home")
    .style.display="none";



   

    document
    .getElementById("letter")
    .style.display="flex";



    showWord();


}






function showWord(){


    if(index < letterWords.length){



        let p=document.createElement("p");


        p.className="word";


        p.innerHTML=letterWords[index];



        document
        .getElementById("words")
        .appendChild(p);



        index++;



        setTimeout(

            showWord,

            2200

        );


    }

    else{


        

       setTimeout(()=>{

document.getElementById("letter").style.display="none";

document.getElementById("gift").style.display="flex";

},2000);


    }


}







function showGift(){


    document
    .getElementById("giftLink")
    .style.display="block";


}