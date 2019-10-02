// a service is used for separation of concerns
// it encapsulates business logic - while controllers are responsible for formatting input and output
// 2 benefits of this infra:
// 1 -cleaner code in controllers
// 2 - if a request takes time to respond, the service can return immediately and push the request to a queue 
// to be executed later as a background task it can be 
module.exports = class PlansService {
  async findAll(userId) {
    return [];
  }
  async findOne(id) {
      
  }
  async create(plan) {
      
  }
  async deleteOne(id) {
      
  }
};
