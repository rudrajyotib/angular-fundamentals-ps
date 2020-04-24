import { FormControl } from '@angular/forms';

export function restrictedWords(words) 
{
  return (control:FormControl) : {[key:string]:any} =>
  {
    
        if (!words || ! (words.length > 0))
        {
            return null;
        }

      var invalidWords = words
      .map((word: any) => {
          return control.value.includes(word) ? word : null;
      })
      .filter(invalidWord => invalidWord != null);

      return invalidWords && invalidWords.length > 0 
      ? {'restrictedWords': invalidWords.join(',')}
      :null;
    
  }
}