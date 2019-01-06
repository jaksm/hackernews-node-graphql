function newLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({ mutation_in: ["CREATED"] }).node();
}

function updateLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({ mutation_in: ["UPDATED"] }).node();
}

// function deleteLinkSubscribe(parent, args, context, info) {
//   return context.prisma.$subscribe.link({ mutation_in: ["DELETED"] });
// }

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => payload
};

const updateLink = {
  subscribe: updateLinkSubscribe,
  resolve: payload => payload
};

// const deleteLink = {
//   subscribe: deleteLinkSubscribe,
//   resolve: payload => payload
// };

module.exports = {
  newLink,
  updateLink
  // deleteLink
};
