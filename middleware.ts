import { authMiddleware } from "@clerk/nextjs"; 

export default authMiddleware({
  publicRoutes: ['/','/api/webhook/clerck'],
  ignoredRoutes: ['/api/webhook/clerck']
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  
};