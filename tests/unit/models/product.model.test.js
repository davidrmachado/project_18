const chai = require("chai");
const sinon = require("sinon");

const { expect } = chai;

const { getAllProduct, getProductByID } = require("../../../src/models");

const connection = require("../../../src/models/connection");

const { itemListMock, itemMock } = require("../mocks/product.mock");

describe("Testes unitáios da camada Model", () => {

  it("Verifica a requisição da lista completa de produtos", async () => {
    const result = await getAllProduct();

    sinon.stub(connection, "execute").resolves([itemListMock]);

    expect(result).to.be.deep.equal(itemListMock);
  });

  it("Verifica a requisição de um produto por Id", async () => {
    const result = await getProductByID(1);

    sinon.stub(connection, "execute").resolves([[itemMock]]);

    expect(result).to.be.deep.equal(itemMock);
  });

  afterEach(sinon.restore);
});
