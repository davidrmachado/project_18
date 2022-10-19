const chai = require("chai");
const sinon = require("sinon");

const { expect } = chai;

const productModel = require("../../../src/models");
const { getAll, getById } = require("../../../src/services");

const { itemListMock, itemMock } = require("../mocks/product.mock");

describe("Testes unitáios da camada Service", () => {

  it("Verifica a requisição da lista completa de produtos", async () => {
    const result = await getAll();

    sinon.stub(productModel, "getAllProduct").resolves(itemListMock);

    expect(result).to.deep.equal(itemListMock);
  });

  it("Verifica a requisição de um produto por Id", async () => {
    const result = await getById(1);

    sinon.stub(productModel, "getProductByID").resolves(itemMock);

    expect(result).to.deep.equal(itemMock);
  });

  afterEach(sinon.restore);
});
