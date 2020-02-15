
$(document).ready(() => {

    $('.submit').on('click', (e) => {
        e.preventDefault();
        const name = $('#name').val();
        const gender = $('#gender').val();
        let url = 'https://joeschmoe.io/api/v1/'+gender+'/'+name;
        console.log(name);
        console.log(gender);
        const output = `
       
<div class="img-div">
<img src=${url} /><br>

</div>
<h4 class='bottom-name'>${name}</h4>

        `;

        $('.main').html(output)

    });

    const creditUrl = "https://www.facebook.com/vijaysahuofficialpage";
    const author = "Vijay Sahu";
    const copyright = $('.x-copyright').text()
    var credit = $('#credit').attr('href');
    if (credit != creditUrl && copyright != author) {
    alert("Created By Vijay Sahu")
    window.open(creditUrl)
   }

})