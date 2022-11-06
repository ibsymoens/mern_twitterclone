import SignupStep1 from "../components/form/SignupStep1";
import SignupStep2 from '../components/form/SignupStep2';
import SignupStep3 from '../components/form/SignupStep3';
import SignupStep4 from '../components/form/SignupStep4';
import SignupStep5 from '../components/form/SignupStep5';

export const signupStepsRoutes = [
    {
        label: "Create your account",
        component: SignupStep1
      },
      {
        label: "Customize your experience",
        component: SignupStep2
      },
      {
        label: "Create your account",
        component: SignupStep3
      },
      {
        label: 'We sent you a code',
        component: SignupStep4
      },
      {
        label: "You'll need a password",
        component: SignupStep5
      }
];