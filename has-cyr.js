/**
 * Has Cyr, http://tpkn.me
 */
const dict = {
   'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z',
   'и':'i','й':'i','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r',
   'с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sh',
   'ъ':'','ы':'i','ь':'','э':'e','ю':'yu','я':'ya','А':'A','Б':'B','В':'V',
   'Г':'G','Д':'D','Е':'E','Ё':'YO','Ж':'ZH','З':'Z','И':'I','Й':'I','К':'K',
   'Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U',
   'Ф':'F','Х':'H','Ц':'C','Ч':'CH','Ш':'SH','Щ':'SH','Ъ':'','Ы':'I','Ь':'',
   'Э':'E','Ю':'YU','Я':'YA'
};

function hasCyr(str, preproc, translit = false){
   let char, cyr_rule = /[а-яйё]+/gi;
   let modify = typeof preproc === 'function' ? true : false;
   
   if(cyr_rule.test(str)){
      str = str.replace(cyr_rule, (match, ...args) => {
         char = str.substr(args[0], match.length);

         if(translit){
            char = char.split('').map(l => dict[l]).join('');
         }
         if(modify && !translit){
            char = preproc(char);
         }

         return char;
      });

      return str;
   }else{
      return null;
   }
}

module.exports = hasCyr;
