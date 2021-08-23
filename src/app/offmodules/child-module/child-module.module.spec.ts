import { ChildModuleModule } from './child-module.module';

describe('ChildModuleModule', () => {
  let childModuleModule: ChildModuleModule;

  beforeEach(() => {
    childModuleModule = new ChildModuleModule();
  });

  it('should create an instance', () => {
    expect(childModuleModule).toBeTruthy();
  });
});
