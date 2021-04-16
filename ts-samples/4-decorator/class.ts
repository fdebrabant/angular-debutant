interface RegisteredComponent {
  selector: string;
  instance: object;
}

interface ComponentMetadata {
  selector: string;
}

const registeredComponents: Array<RegisteredComponent> = [];

// Component decorator factory
function Component(metadata: ComponentMetadata) {
  return <T extends object>(originalConstructor: new(...args: any[]) => T): any => {


    function componentInstanceConstructor(...args: any[]): T {
      const componentInstance = new originalConstructor(...args);
      registeredComponents.push({
        selector: metadata.selector,
        instance: componentInstance
      });
      return new originalConstructor(...args);
    }

    componentInstanceConstructor.prototype = originalConstructor.prototype;
    return componentInstanceConstructor;
  };
}

@Component({
  selector: 'myComponent'
})
class MyComponent {
}

new MyComponent();
console.log(registeredComponents);