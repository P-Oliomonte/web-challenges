import Chance from "chance";
import { uid } from "uid";

export default function handler(request, response) {
  const chance = new Chance();
  if (request.method === "GET") {
    const randomCharacter = {
      id: uid(),
      firstName: chance.first(),
      lastName: chance.last(),
      birthday: chance.birthday({ string: true }),
      age: chance.age(),
    };

    response.status(200).json(randomCharacter);
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
