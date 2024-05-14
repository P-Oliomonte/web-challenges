console.clear();

const email = "michael.knight@flag.com";

function getUserFromEmail(email) {
  if (!email.includes("@")) {
    return null;
  } else {
    const emailBeforeAt = email.split("@")[0];
    console.log(emailBeforeAt);
    if (!emailBeforeAt.includes(".")) {
      return null;
    } else {
      const splitEmailName = emailBeforeAt.split(".");

      const emailFirstName =
        splitEmailName[0].charAt(0).toUpperCase() + splitEmailName[0].slice(1);
      const emailLastName =
        splitEmailName[1].charAt(0).toUpperCase() + splitEmailName[1].slice(1);

      return { firstName: emailFirstName, lastName: emailLastName };
    }
  }
}

const user = getUserFromEmail(email);

console.log(user);
