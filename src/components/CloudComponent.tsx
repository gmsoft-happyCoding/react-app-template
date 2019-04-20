import SystemJS from 'systemjs';
import create from 'cloud-component';

const registryServer = process.env.REACT_APP_COMPONENT_REGISTRY_SERVER || '';

const { loadComponent, CloudComponent } = create(SystemJS, registryServer);

export { loadComponent };

export default CloudComponent;
