AccountsTemplates.configure({
  defaultLayout: "layout",
  defaultLayoutRegions: {},
  defaultContentRegion: "main",
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  sendVerificationEmail: false,
  showForgotPasswordLink: true,
  showLabels: false,
  lowercaseUsername: true,
  focusFirstInput: true,
  homeRoutePath: "/dashboard",
  redirectTimeout: 5000,
  onLogoutHook() {
    FlowRouter.go("/")
  },
  texts: {
    button: {
      signIn: "Login",
      signUp: "Register now!"
    },
    title: {
      signIn: "",
      signUp: ""
    }
  }
})
