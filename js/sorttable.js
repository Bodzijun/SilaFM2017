// JavaScript Document

<!--
/*
originally written by paul sowden <paul@idontsmoke.co.uk> | http://idontsmoke.co.uk
modified and localized by alexander shurkayev <alshur@ya.ru> | http://htmlcssjs.ru
*/

var img_dir = "/i/"; // папка с картинками
var sort_case_sensitive = false; // вид сортировки (регистрозависимый или нет)

// ф-ция, определяющая алгоритм сортировки
function _sort(a, b) {
    //alert(parseFloat(a)+':'+parseFloat(b));
	var a = a[0];
    var b = b[0];
    var _a = (a + '').replace(/,/, '.');
    var _b = (b + '').replace(/,/, '.');
	//alert(parseFloat(_a)+':'+parseFloat(_b));
    if (parseFloat(_a) && parseFloat(_b)) return sort_numbers(parseFloat(_a), parseFloat(_b));
    else if (!sort_case_sensitive) return sort_insensitive(a, b);
    else return sort_sensitive(a, b);
}

// ф-ция сортировки чисел
function sort_numbers(a, b) {
    return a - b;
}

// ф-ция регистронезависимой сортировки
function sort_insensitive(a, b) {
    var anew = a.toLowerCase();
    var bnew = b.toLowerCase();
    if (anew < bnew) return -1;
    if (anew > bnew) return 1;
    return 0;
}

// ф-ция регистрозависимой сортировки
function sort_sensitive(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

// вспомогательная ф-ция, выдирающая из дочерних узлов весь текст
function getConcatenedTextContent(node) {
    var _result = "";
    if (node == null) {
        return _result;
    }
    var childrens = node.childNodes;
    var i = 0;
    while (i < childrens.length) {
        var child = childrens.item(i);
        switch (child.nodeType) {
            case 1: // ELEMENT_NODE
            case 5: // ENTITY_REFERENCE_NODE
                _result += getConcatenedTextContent(child);
                break;
            case 3: // TEXT_NODE
            case 2: // ATTRIBUTE_NODE
            case 4: // CDATA_SECTION_NODE
                _result += child.nodeValue;
                break;
            case 6: // ENTITY_NODE
            case 7: // PROCESSING_INSTRUCTION_NODE
            case 8: // COMMENT_NODE
            case 9: // DOCUMENT_NODE
            case 10: // DOCUMENT_TYPE_NODE
            case 11: // DOCUMENT_FRAGMENT_NODE
            case 12: // NOTATION_NODE
            // skip
            break;
        }
        i++;
    }
    return _result;
}
function zebra(table_id){

				table_string = new Array();
				table_string[0] = new Array();
				var i = 0;
        		var s = 0;
				var y = 0;
				var n = 5;

        $('#'+table_id+' tbody tr').each(function() {

			//if(y < 5){table_string[y] = new Array();}
			//if(i == 5){i = 0; s++; table_string[s] = new Array();}
			//alert (i+':'+s+'='+$(this).html());
			table_string[i] = $(this).attr('class');
			//$(this).text('1');

			if(y == 0){$(this).attr('class', 'spis_one'); y=1;}
			else{$(this).attr('class', 'spis_two'); y=0;}

			i++;
		});
		//strings = table_string[0].sort(_sort);

	}

// суть скрипта
function sort(id, vektor) {
  	 el = document.getElementById(id);
    while (el.tagName.toLowerCase() != "td") el = el.parentNode;

	var a = new Array();
    var name = el.lastChild.nodeValue;
    var dad = el.parentNode;
    var table = dad.parentNode.parentNode;
    var up = table.up;
    var node, arrow, curcol;
    for (var i = 0; (node = dad.getElementsByTagName("td").item(i)); i++) {
        if (node.lastChild.nodeValue == name){
            curcol = i;
            if (node.className == "curcol"){
                arrow = node.firstChild;
                table.up = Number(!up);

            }else{
                node.className = "curcol";

                arrow = node.insertBefore(document.createElement("img"),node.firstChild);
                table.up = 0;
            }
           // arrow.src = img_dir + table.up + ".gif";

            arrow.alt = "";
        }else{
            if (node.className == "curcol"){
                node.className = "";

                if (node.firstChild) node.removeChild(node.firstChild);

            }
        }


    }
    var tbody = table.getElementsByTagName("tbody").item(0);
    for (var i = 0; (node = tbody.getElementsByTagName("tr").item(i)); i++) {
        a[i] = new Array();
        a[i][0] = getConcatenedTextContent(node.getElementsByTagName("td").item(curcol));
        a[i][1] = getConcatenedTextContent(node.getElementsByTagName("td").item(1));
        a[i][2] = getConcatenedTextContent(node.getElementsByTagName("td").item(0));
        a[i][3] = node;
    }
	//if(table.up){$('#'+vektor).text('убыв');}else{$('#'+vektor).text('возр'); }

    a.sort(_sort);
    if (vektor == 'up'){a.sort(_sort); a.reverse();}
    for (var i = 0; i < a.length; i++) {
        tbody.appendChild(a[i][3]);
		//alert(a[i][3]);
    }
	//alert(table.className);
	zebra(table.id);
}

// ф-ция инициализации всего процесса
function init(e) {

    if (!document.getElementsByTagName) return;

    for (var j = 0; (thead = document.getElementsByTagName("thead").item(j)); j++) {
        var node;
        for (var i = 0; (node = thead.getElementsByTagName("td").item(i)); i++) {

            //if (node.addEventListener) node.addEventListener("click", sort, false);
            //else if (node.attachEvent) node.attachEvent("onclick", sort);
            //node.title = "Нажмите на заголовок, чтобы отсортировать колонку";
        }
        thead.parentNode.up = 0;


    }
}

// запускаем ф-цию init() при возникновении события load
var root = window.addEventListener || window.attachEvent ? window : document.addEventListener ? document : null;
if (root){
    if (root.addEventListener) root.addEventListener("load", init, false);
    else if (root.attachEvent) root.attachEvent("onload", init);
}
//-->


function sortlink(id, num){
	//alert('#'+id);
      $("a.sort_link_"+num).attr('style', 'color: #A4103D; cursor: pointer; text-decoration:underline;');
	  $('#'+id+num).attr('style', 'color:#000; cursor:default; text-decoration:none;');
    }
