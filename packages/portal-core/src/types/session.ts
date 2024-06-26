interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

type SessionStatus = "loading" | "authenticated" | "unauthenticated";

export { type Session, type SessionStatus };
