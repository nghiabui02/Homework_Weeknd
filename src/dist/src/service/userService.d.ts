declare class UserService {
    private Repository;
    constructor();
    findAll: (name: any) => Promise<any>;
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
