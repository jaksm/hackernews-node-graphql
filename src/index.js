const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => context.prisma.links(),
    link: (root, args, context, info) =>
      context.prisma.link({ where: { id: args.id } })
  },
  Mutation: {
    createLink: (root, args, context, info) =>
      context.prisma.createLink({ ...args }),
    updateLink: (root, args, context, info) =>
      context.prisma.updateLink({
        data: { url: args.url, description: args.description },
        where: { id: args.id }
      }),
    deleteLink: (root, args, context, info) =>
      context.prisma.deleteLink({ id: args.id })
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  context: { prisma },
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
