import {it, describe, expect} from 'vitest'
import { mountSuspended} from '@nuxt/test-utils/runtime'
import App from './app.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
    it('should get the text content of the <v-btn> component', async () => {
        const wrapper = await mountSuspended(App);
        const btnElement = wrapper.findComponent('.qq').element;
        btnElement.textContent = 'New Button Text';
        // btnElement.setValue = 'setValue';
        // console.log(btnElement.textContent);
        expect(wrapper.html()).toContain('New Button');
    });

    // it('mounted', async () => {
    //     const wrapper = await mount(App);
    //     const btnElement = wrapper.find('.qq').element;
    //     // console.log('----------', wrapper, '----------');
        
    // })
});


// // 引入 @vue/test-utils 和你要测试的组件
// import { mount } from '@vue/test-utils';
// import App from './app.vue';

// describe('App123', () => {
// // 使用 @vue/test-utils 的 mount 函数挂载组件
// it('set value of input in MyComponent', async () => {
//   const wrapper = await mount(App);
//   const input = wrapper.find('.qq') as any;

  
//   await input.setValue('new value'); 
//   expect(input.value).toBe('new value'); // 断言 input 的值是否为 'new value'
// });

// })