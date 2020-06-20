const api = require("../services/api");

module.exports = {
  async Users(request, response) {
    const { data } = await api.get("users");
    // console.log(result.data);
    const person = [];

    data.map((user) => {
      person.push({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    });

    response.status(200).json(person);
  },
  async Posts(request, response) {
    const { id } = request.params;
    const { data } = await api.get("posts");
    const callback = [];
    data.map((call) => {
      call.userId == id
        ? callback.push({
            userId: call.userId,
            id: call.id,
            title: call.title,
            body: call.body,
          })
        : "";
    });

    response.status(200).json(callback);
  },
};
