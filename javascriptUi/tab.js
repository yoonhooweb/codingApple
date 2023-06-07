document.addEventListener("DOMContentLoaded", function () {

    /*  - 버튼0 누르면 
        - 버튼0에 orange 클래스명 부착
        - 박스0에 show 클래스명 부착
     */
    /* $(".list li.tab-button").on("click", () => {
        let tab = $(this).data("tab");
        console.log(tab);
    }) */

    /* let test = {
        car : "소나타",
        carPrice : 40000,
        carColor : "black",
        body : function (color) {
            document.querySelector("body").style.backgroundColor = color;
        }
    }

    console.log(test.car, test.carColor);

    test.body('black'); //객체안에 함수 인자값 넘기기
    
    */
    /* let test = {
        car : "소나타",
        carPrice : 40000,
        carColor : "black",
    } */

    /* document.querySelector(".name").innerHTML = test.car;
    document.querySelector(".price").innerHTML = test.carPrice; */

    /* let person = [
        {
            id : 1,
            car : "car1",
            car2 : "car2",
            name : "JoYoonHoo1",
            price : 5000
        },
        {
            id : 2,
            car : "car1",
            car2 : "car2",
            name : "JoYoonHoo2",
            price : 6000
        },
        {
            id : 3,
            car : "car1",
            car2 : "car2",
            name : "JoYoonHoo3",
            price : 7000
        }
    ]

    for (let i = 0; i < person.length; i++) {
        document.querySelectorAll(".name")[i].innerHTML = person[i].name;
        document.querySelectorAll(".price")[i].innerHTML = person[i].price;
    }
    
    for (let data in person) {
        document.querySelectorAll(".name")[data].innerHTML = person[data].name;
        document.querySelectorAll(".name")[data].innerHTML = person[data].price;
    } */

    /*  let sel = document.querySelector(".form-select");
     sel.addEventListener("change", function () {
         let val = sel.options[sel.selectedIndex].value; //셀렉트박스 value 가지고오는법
         console.log(sel.options[sel.selectedIndex].text); // Text 가지고오는법
         if (val == 1) {
             document.querySelector(".form-select2").style.display = "block";
         } else if (val == 3) {
             document.querySelector(".form-select2").style.display = "block";
             document.querySelector(".form-select2").options[0].text = 28;
             document.querySelector(".form-select2").options[1].text = 30;
         }
     }) */

    /* let tag = document.createElement('p'); //태그 생성
    tag.innerHTML = "안녕? 난 새 태그야"; //태그안에 텍스트 생성
    document.querySelector("#tag").append(tag); //div id tag 안에 생성 */

    let pent = [23, 26, 30];
    let shirts = [95, 100, 105];
    let sel = document.querySelector(".form-select");
    let sel2 = document.querySelector(".form-select2");
    sel.addEventListener("change", function (e) {
        let val = sel.value;
        if (val == "모자") {
            sel2.style.display = "block";
            document.querySelector(".test").style.width = "1000px";
        } else if (val == "바지") {
            sel2.style.display = "block";
            sel2.innerHTML = "";
            pent.forEach((i) => {
                /* var opt = document.createElement('option');
                opt.innerHTML = i;
                sel2.append(opt); */
                console.log(i);
                sel2.insertAdjacentHTML("beforeend", `<option>${i}</option>`);
            })
        } else if (sel.value == "셔츠") {
            sel2.innerHTML = "";
            sel2.style.display = "block";
            shirts.forEach(function(v){ 
                let tag = document.createElement("option");
                tag.innerHTML = v;
                sel2.append(tag);
            })
        }
    })

    
    let userName = ['흥민', '영희', '철수', '재석'];
    function userFind(a) {
        for (let i = 0; i < userName.length; i++) {
            if (userName[i] == a) {
                console.log("있습니다.")
            }
        }
    }

    function gugudan () {
        for (let i = 2; i < 10; i++) {
            for (let j = 1; j < 10; j++) {
                console.log("구구단 :" + i * j);
            }
            console.log(`${i} 단 끝`);
        }
    }

    function avgNum (a, b) {

        let result = 0;
        for (let i = 0; i < a.length; i++) {
            result += a[i];
        }
        let avg = result / a.length;
        if (avg < b) {
            console.log(b - avg +"점 점수가 올랐네요~");
        } else { 
            console.log("안타깝네요 ㅠㅠ");
        }
    }

    avgNum([10,20,30,40,50],40);
    avgNum([40,40,40],40);
    /* gugudan();
    userFind("철수"); */

});



$(document).ready(function () {
    /* $(".list li.tab-button").click(function () {
        let idx = $(this).index();
        $(".tab-button").removeClass("orange");
        $(".tab-content").removeClass("show");
 
        $(this).addClass("orange");
        $(".tab-content").eq(idx).addClass("show");
    }) */

    /* let pents = [23, 26, 30];
    $(".form-select").on("change", function () {

        let val = $(".form-select").val();

        if (val == "바지") {
            $(".form-select2").css("display","block").html('');
            pents.forEach( function (i) {
                var $opt = $('<option />', {
                    value : i
                });
                $opt.text(i);
                $(".form-select2").append($opt)
            })
        }
    }) */

    /* let shirts = [95, 100, 105];
    $(".form-select").on("change", function () {
        if ($(".form-select").val() == "셔츠") {
            $(".form-select2").css("display", "block").html('');
            shirts.forEach(function(i){
                let value = $('<option />', {value : i});
                value.text(i);
                console.log(i)
                $(".form-select2").append(value);
            })

        }
    }) */
})



