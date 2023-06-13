import create from 'cloud-component';

const registryServer = process.env['business.COMPONENT_REGISTRY_SERVER'] || '';

const { loadComponent, CloudComponent } = create(null, registryServer);

export { loadComponent };

export default CloudComponent;
