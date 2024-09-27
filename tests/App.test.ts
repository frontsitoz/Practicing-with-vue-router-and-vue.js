import App from '@/App.vue';
import router from '@/router';
import { mount, shallowMount } from '@vue/test-utils';

describe('<App/>', ()=>{
  // Utilizas shallowMount para evitar que RouterView se renderice completamente.
test('should be render correctly with RouterView', ()=>{

const wrapper = shallowMount(App,{
    global: {
        plugins: [router],// Incluyes el router globalmente para que esté disponible.
    },
});
// Buscas el componente RouterView dentro del wrapper.
const routerView = wrapper.findComponent({name:'RouterView'})
//console.log(wrapper.html)

 // Verificas si RouterView está presente en el DOM.
expect(routerView.exists()).toBe(true)
})



})