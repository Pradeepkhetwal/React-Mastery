//  Definition of function
// It will take 2 parameters first is kis element ko render karna hai div k andar and second is the div jiske andar render karna hai.
function customRender(reactElement, container) {

  // So jis element ko render karna hai i.e reactElement hume use create karna padega.
  //  below will create an element of reactElement type , means if reactElement is anchor tag then in that case an element of type anchor tag will be created.
  const domElement = document.createElement(reactElement.type)
  
  domElement.innerHTML = reactElement.children 

  // Look in case reactElement is <h>(heading) or like <p>(paragraph) so these tags does not have any properties but elements like <a>(anchor) have properites like href and target so this for loop will be activated only incase the reactElement is having properties.
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop,reactElement.props[prop])
  }

  // Finally react element ko container(which is div whose id is root) k andar daal do.
  container.appendChild(domElement);
}


//Creating ReactElement here this element is anchor tag.
const reactElement = {
  type: 'a',
  props: {
    href: 'https://facebook.com',
    target:'_blank'
  },
  // the content that should be rendered inside the element.
  children:'Click on me to visit facebook '
}




//1 .getting the div whose id is root from the index.js file

const miniContainer = document.querySelector("#root")

//2. Now to render it as we know , react already has it's own render method but here we are creating our own react so we will have to make the render method as well.

customRender(reactElement,miniContainer)

