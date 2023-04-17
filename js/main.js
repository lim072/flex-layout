//1단계 : 변수에 js로 변화/동작 시킬 요소를 담아야합니다

let articles = document.querySelectorAll("article");
let aside = document.querySelector("aside");
let close = aside.querySelector("span");

//유사배열로 반환된 articles를 반복을 돌면서
//각각의 article 개별로 이벤트를 걸어주어야 합니다

for(let el of articles){
    //마우스가 들어가면 비디오가 재생되는 이벤트
    //hover를 js로 하게되면 두가지 이벤트로 작성해야합니다
    //mouseenter, mouseleave 이벤트 두가지를 다 걸어야 호버처럼 작동합니다
    el.addEventListener("mouseenter", function (e){
        e.currentTarget.querySelector("video").play();

    });

    //마우스가 빠지면 비디오가 멈추는 이벤트
    el.addEventListener("mouseleave", function (e){
        e.currentTarget.querySelector("video").pause()
    });

    //.currentTarget 은 이벤트 리스너가 붙어지는
    //그 대상을 의미합니다 지금 상황에서는 마우스를 엔터한 아티클을 의미하는것
    //만약 3인덱스 아티클에 마우스를 올렸다면
    //currentTarget은 3인덱스 아티클이 됩니다


    //event = {
    //     이벤트가 발생한 대상,
    //     어떤이벤트가 발생했는지
    //     정보들이 객체의 형태로 생성됩니다
    //     이벤트가 발생하는 시점에 이벤트 객체에
    //     해당이벤트에 대한 내용을 담은 내용생성됩니다
    // }

     //클릭하면 일어나는 이벤트
     el.addEventListener("click", function(e){
        //클릭이벤트가 일어났을때
        //aside에 on이라는 활성화클래스를 붙여주어
        //화면에 띄워주는 일이 있어야한다
        aside.classList.add("on");

        //2.클릭한 아티클의 h2, p, video의 경로를
        //가지고 와서 aside에 교체해야 한다
        //2-1 클릭한 아티클안의 내용(h2,p,video)의
        //내용을 변수로 저장합니다
        let art_h2 = e.currentTarget.querySelector("h2").innerText;
        let art_p = e.currentTarget.querySelector("p").innerText;
        //e.currentTarget 이 코드로 인해 정확하게 몇번째 아티클을 선택하였고,
        //가지고 올 아티클을 지정해서 올바른 정보를 변수에 담을 수 있게 합니다
        
        let art_video_src = e.currentTarget.querySelector("video").getAttribute("src");
        // .getAttribute 속성을 가져온다

 
        //2-2 변수로 저장된 값을 aside에 교체합니다
        aside.querySelector("h2").innerText = art_h2;
        aside.querySelector("p").innerText = art_p;
        aside.querySelector("video").setAttribute("src",art_video_src);
        //.setAttribute 가져온 속성을 세팅한다 그리고 무엇을 어떻게 가 들어간다 그래서 대입을 따로 안한다

        //3. 비디오가 플레이 되어야합니다
        aside.querySelector("video").play();
     })
    
}
 

 //클릭하면 일어나는 이벤트
 close.addEventListener("click",function(){
    aside.classList.remove("on");
    aside.querySelector("video").pause();
 })

 // toggle을 안쓰는 이유는 aside가 나왔을때 toggle로 만든 객체가 사라져서 다시 누를수 없기 때문에
 // aside를 부르는 버튼을 클릭이벤트로 만들고 close에다가 따로 aside 가 사라질수있게 닫는 클릭이벤트를 만들어준다


    


