import create from 'cloud-component';


const registryServer = process.env['hosts.component-registry-server']
  ? `//${process.env['hosts.component-registry-server']}`
  : '';

const { loadComponent, CloudComponent } = create(null, registryServer);

export { loadComponent };

export default CloudComponent;
