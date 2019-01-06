function info() {
  return "This is the API of a Hackernews Clone";
}
function feed(parent, args, context, info) {
  return context.prisma.links();
}
function link(root, args, context, info) {
  context.prisma.link({ where: { id: args.id } });
}

module.exports = {
  info,
  feed,
  link
};
