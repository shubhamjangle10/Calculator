var ip = document.getElementById('input-area');
var btns = document.querySelectorAll('button');
ip.value = 0;
var btntext;
var opvalue = '';
for (item of btns) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        console.log(btntext);
        //ip.value += btntext;
        if (btntext == 'x') {
            //console.log("*");
            btntext = '*';
            opvalue += btntext;
            ip.value = opvalue;
        }
        else if (btntext == '÷') {
            //console.log("*");
            btntext = '/';
            opvalue += btntext;
            ip.value = opvalue;
        }
        else if (btntext == 'C') {
            console.log('cancel button');
            opvalue = '';
            ip.value = opvalue;
        }
        else if (btntext == '=') {
            if (ip.value == 0) {
                ip.value = 0;
            }
            else {
                ip.value = eval(opvalue);
                opvalue = '';
            }


        }

        else if (btntext == 'Del') {
            ip.value = ip.value.slice(0, -1);
        }

        else {
            opvalue += btntext;
            ip.value = opvalue;
        }
    })
}
