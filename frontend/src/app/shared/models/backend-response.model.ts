import {BackendError} from './backend-error.model';

export class BackendResponse {
  backendErrorData ?: BackendError;
  responseData ?: any;

  constructor(init?: Partial<BackendResponse>) {
    Object.assign(this, init);
  }
}
