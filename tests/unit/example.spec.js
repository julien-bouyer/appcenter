import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Login from '@/components/auth/login.vue';

describe('login.vue', () => {
  it('renders props.msg when passed', () => {
    const login = {};
    login.email = 'user1@test.fr';
    const wrapper = shallowMount(Login, {
      propsData: { login },
    });
    expect(wrapper.text()).to.include(login.email);
  });
});
