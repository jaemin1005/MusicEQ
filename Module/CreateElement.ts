export class CreateElement{
  create<T extends keyof HTMLElementTagNameMap>(elementName : T, property : Partial<HTMLElementTagNameMap[T]> ,style :  Partial<CSSStyleDeclaration>){
    let elem = document.createElement(elementName);

    CreateElement.SetProperty(elem, property);
    CreateElement.SetStyle(elem, style);

    return elem;
  }

  static SetStyle(element : HTMLElement, style? :  Partial<CSSStyleDeclaration> | null)
  {
    if(style == null)
      return;

    for(let property in style){
      element.style[property] = style[property]!;
    }
  }

  static SetProperty<T extends HTMLElement>(element : T, property :  Partial<T> | null)
  {
    if(property == null)
      return;

    const keys = Object.keys(property) as (keyof typeof property)[];

    for(let key of keys){
      element[key] = property[key]!  
    }
  }
}