function check(){
    // c is the number of right answers
    let c=0
    // then importing the client values by their name
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 =document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;
    let result = document.getElementById('result');
    let result1 = document.getElementById('result_inter');

    if (q1=='madrid'){
        c=c+1
    };
    if(q2 == 'paris'){
        c=c+1
    };
    if(q3 == 'londre'){
        c=c+1
    };
    if (q4=='ataturk'){
        c=c+1
    };
    if(q5 == 'rome'){
        c=c+1
    };
    document.getElementById('reslut_title').innerHTML=('Vos resultats');
    result.textContent = `Votre resultat est ${c}/5`;
    if (c==0){
        result1.textcontent =`Quesque tu nous fais la ?`
    }
    if (c==1){
        result1.textContent = `Aie Aie Aie.....`
    };
    if (c==2){
        result1.textContent =`Vous Ne Maitrisez pas les Capitales`
    };
    if (c==3){
        result1.textContent='Pas Mal Une petite revision est necessaire'
    };
    if (c==4){
        result.textcontent=`Pas Mal`
    };
    if (c==5){
        result1.textcontent =`Bravo!!!!!!!!:)`
    };
    console.log(c+'/5')
}
function rest(){
    document.getElementById('result').style.display='none';
    document.getElementById('result_inter').style.display='none';
    document.getElementById('reslut_title').style.display='none';
    window.location.reload();
}