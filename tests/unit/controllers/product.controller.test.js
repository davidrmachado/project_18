const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { getAll, getById } = require("../../../src/controllers");
const productService = require("../../../src/services");

const { itemListMock, itemMock } = require("../mocks/product.mock");

describe("Testes unitáios da camada Controller", () => {

  it("Verifica a requisição da lista completa de produtos", async () => {
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAll').resolves(itemListMock);

    await getAll({}, res);

    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.json, itemListMock);

  });

  it("Verifica a requisição de um produto por Id", async () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getById").resolves(itemMock);

    await getById(req, res);

    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.json, itemMock);
  });

  afterEach(sinon.restore);

});
