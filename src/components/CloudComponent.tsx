import create from 'cloud-component';

const registryServer = process.env['business.component-registry-server'];

const { loadComponent, CloudComponent } = create(null, registryServer);

export { loadComponent };

export default CloudComponent;
