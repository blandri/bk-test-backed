import { expect } from 'chai';
import sinon from 'sinon';
import ProductController from '../src/controllers/product.controller.js';
import Database from '../src/db/index.js'

describe('Product Tests', () => {
  let req: any;
  let res: any;

  before(async () => {
   await new Database().syncModels().then(() => {
      console.log("Models synchronized successfully.");
    })
    .catch((err) => {
      console.error("Error synchronizing models:", err);
    });
  })

  beforeEach(() => {
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis()
    };
    req = {
      body: {}
    };
  });

  it('should create a fertilizer', async () => {
    req.body = { name: 'Dummy fertilizer' };

    await new ProductController().createFertilizer(req, res);

   //  // Assertions
   //  expect(res.status.calledWith(201)).to.be.true;
   //  expect(res.json.calledWith(sinon.match({ name: 'Dummy fertilizer' }))).to.be.true;
  });
});
