function formInputsToXML(formID) {
    var thisform = document.getElementById(formID);
    var elements = thisform.elements;
     // alert(elements.length);

    var out_string = '<' + formID + '>';
    for (i = 0; i < elements.length; i++) {
         //alert(i + elements[i].name + elements[i].value);
        form_elem = elements[i];
        if (form_elem.type == "text" || form_elem.type == "textarea") {
            out_string += '<' + form_elem.name + '>';
            out_string += form_elem.value;
            out_string += '</' + form_elem.name + '>';
        }
        //---radio
        if (form_elem.type == "radio" && form_elem.checked == true) {
            out_string += '<' + form_elem.name + '>';
            out_string += form_elem.checked;
            out_string += '</' + form_elem.name + '>';
        }
        //---select
        if (form_elem.type == "select-one") {
            var selectValue = form_elem.options[form_elem.selectedIndex].value;
            out_string += '<' + form_elem.name + '>';
            out_string += selectValue;
            out_string += '</' + form_elem.name + '>' ;
     
        }

    }
    out_string += '</' + formID + '>';
   return out_string;

}


function Creatxml() {
   
    var thisform = document.all;
    var form_len = thisform.length;
    //alert(form_len);


    var out_string = '';

    out_string += '<?xml version="1.0" ?>' + "\n";
    out_string += '<Webform>' + "\n";
    var form_elem;
    for (var i = 0; i < form_len; i++) {
        form_elem = document.all[i];
        if (form_elem.type == "text" || form_elem.type == "textarea") {
            out_string += '<' + form_elem.id + '>';
            out_string += form_elem.value;
            out_string += '</' + form_elem.id + '>' + "\n";
        }
        //---radio
        if (form_elem.type == "radio") {
            out_string += '<' + form_elem.id + '>';
            out_string += form_elem.checked;
            out_string += '</' + form_elem.id + '>' + "\n";
        }
        //---select
        if (form_elem.type == "select-one") {
            var SItem = document.getElementById(form_elem.id);
            var SOption = SItem.options[SItem.selectedIndex];
            out_string += '<' + SOption.id+ '>';
            out_string += SOption.text;
            out_string += '</' + SOption.id + '>' + "\n";
        }
    }
    out_string += "</Webform>";

    alert(out_string);
    Ajax(out_string, "savetoDB.aspx");
    //alert("XML created!");

}