// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "AIzaSyBJkVBeEaOpM39q53pciQ79uW5KtIhk9Xo",
      authDomain: "tna-test-project.firebaseapp.com",
      databaseURL: "https://tna-test-project.firebaseio.com",
      projectId: "tna-test-project",
      storageBucket: "tna-test-project.appspot.com",
      messagingSenderId: "20520041410"
    }
};
