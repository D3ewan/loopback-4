import {Interceptor, InvocationContext, InvocationResult, Next, Provider, ValueOrPromise} from '@loopback/context';

/**
 * This class will be used to create an instance of an interceptor to modify outgoing requests and handle incoming responses.
 */
export class ExternalApiInterceptor implements Provider<Interceptor> {
  constructor(
    // Inject any dependencies here
  ) { }

  value() {
    return this.intercept.bind(this);
  }

  async intercept(
    invocationCtx: InvocationContext,
    next: Next,
  ): Promise<ValueOrPromise<InvocationResult>> {
    try {
      // Modify outgoing request
      // For example, add headers, modify the body, etc.
      console.log('Log outgoing request', invocationCtx.args);

      const result = await next();

      // Handle incoming response
      console.log('Log incoming response', result);

      // You can modify the response here if necessary
      return result;
    } catch (err) {
      // Handle errors
      throw err;
    }
  }
}
