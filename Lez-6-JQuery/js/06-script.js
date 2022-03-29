// 1 form login user e pass quando l'user viene verificato crea un tocken(prendendolo dall'api che viene salvato in local)
//sparisce la pagina login e compare un form di inserimento nome mail numero di telefono città e immagine pulsante aggiungi + post su req res viene salvato su local (json) pulsante + aggiunge un utente,
//dal pulsante + escono fuori le card con i vari dati degli utenti +  l'utente aggiunto


// var elNome

// $(document).ready(function(){
    //   $("form").submit(function(){
        
        
        
        //     alert(nome + password);
        //   });
        // });
        
        
        
        var nome = "simone";
        var passwords = 1234567;
        
        $(function(){
            $('#form').validate({
    rules:{
        //prendo il nome del campo su cui applicare la regola

    
        name:{
            required:true,

        },
        password:{
            required:true,
            minlength: 6,
            maxlength: 12
        }
        
    },
    messages:{
        
        name:{
            required: "Non hai inserito il nome",
            
            }
        },
        password:{
            required: "Inserisci una password",
            minlength: "Password troppo corta",
            maxlength: "PSassword troppo lunga"
        },
       
        
    } 
    $(document).ready(function(){
    if($('#name').val() != nome && $('#password').val() != passwords){
        form.preventDefault();
        // form.submit(console.log("Siamo qui"));
        // console.log("Siamo qui riga 40");

    }

    })

})



