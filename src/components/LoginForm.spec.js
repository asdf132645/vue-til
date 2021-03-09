import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

//LoginForm.vue최소 그룹단위
describe('LoginForm.vue', () => {
  //   test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
  //     const wrapper = shallowMount(LoginForm);
  //     expect(wrapper.vm.username).toBe('');
  //   });
  test('id는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    //특정 username 이라는 html 태그를 찾아갈수있는 find
    // const idInput = wrapper.find('#username');
    // console.log(idInput.element.value);
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    //exists 있으면 true 없으면 false
    expect(warningText.exists()).toBeTruthy();
  });
});
