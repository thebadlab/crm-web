/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [
      {
        path: '/users',
        method: 'get',
        routes: [
          {
            data: [
              {
                id: 642,
                email: 'golovleva.m@arbat.io',
                phone: '+79621864161',
                role: 'roleRealtor',
                fullName: 'Головлева Маргарита Павловна',
                director: {
                  id: 574,
                  fullName: 'Кожина Яна Витальевна',
                },
              },
              {
                id: 638,
                email: 'sokolova.i@arbat.io',
                phone: '+79607499771',
                role: 'roleRealtor',
                fullName: 'Соколова Ирина Сергеевна',
                director: {
                  id: 133,
                  fullName: 'Шиловская Ярославна Руслановна',
                },
              },
              {
                id: 637,
                email: 'ermeeva.v@arbat.io',
                phone: '+79621865368',
                role: 'roleRealtor',
                fullName: 'Еремеева Вероника Андреевна',
                director: {
                  id: 574,
                  fullName: 'Кожина Яна Витальевна',
                },
              },
            ],
          },
        ],
      },
      {
        path: '/users/:id',
        method: 'get',
        routes: [
          {
            entities: {
              params: {
                id: '642',
              },
            },
            data: {
              id: 642,
              email: 'golovleva.m@arbat.io',
              phone: '+79621864161',
              role: 'roleRealtor',
              fullName: 'Головлева Маргарита Павловна',
              director: {
                id: 574,
                fullName: 'Кожина Яна Витальевна',
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
