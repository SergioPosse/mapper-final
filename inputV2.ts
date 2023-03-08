export const json = {
  status: 'success',
  data: {
    id: 3,
    cencoId: 'EF0017',
    name: 'Sergio',
    lastname: 'Posse',
    email: 'sergio.posse@externos-ar.cencosud.com',
    deletedAt: null,
    stores: [
      {
        id: 1,
        name: 'Paris Alto Las Condes',
        code: '20',
        tenants: [
          {
            id: 2,
            name: 'Jumbo Chile',
          },
          {
            id: 1,
            name: 'Paris Chile',
          },
        ],
      },
      {
        id: 4,
        name: 'Paris Marina Arauco',
        code: '22',
        tenants: [
          {
            id: 1,
            name: 'Paris Chile',
          },
        ],
      },
    ],
    currentStore: {
      id: 1,
      name: 'Paris Alto Las Condes',
      code: '20',
      tenants: [
        {
          id: 2,
          name: 'Jumbo Chile',
        },
        {
          id: 1,
          name: 'Paris Chile',
        },
      ],
      roles: [
        {
          role: 'Administrador',
          permissions: [
            'CAN_ACCESS_APPLICATION',
            'CAN_SEARCH_ORDER',
            'CAN_ACCESS_MENU-COMPRAS-CLIENTE',
            'CAN_ACCESS_MENU-SOLICITUD-NC',
            'CAN_ACCESS_MENU-ODI',
            'CAN_ACCESS_MENU-MIS-CASOS',
            'CAN_VIEW_CUSTOMER-INFORMATION',
            'CAN_VIEW_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_CREDIT-NOTE',
            'CAN_CREATE_CUSTOMER-BANK-INFORMATION',
            'CAN_EDIT_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_RETURN',
            'CAN_DOWNLOAD_RETURN-TICKET',
            'CAN_SEND_RETURN-TICKET',
            'CAN_DOWNLOAD_INVOICE',
            'CAN_SEND_INVOICE',
            'CAN_DOWNLOAD_CHANGE-TICKET',
            'CAN_SEND_CHANGE-TICKET',
            'CAN_DOWNLOAD_CREDIT-NOTE-TICKET',
            'CAN_SEND_CREDIT-NOTE-TICKET',
            'CAN_SEND_PURCHASE-TICKET',
            'CAN_ACCESS_MENU-GESTION-COLABORADORES',
            'CAN_USE_FLAG_SELECTOR',
            'CAN_CREATE_SCHEDULING_HOME-PICKUP',
            'CAN_INGRESS_CLAIM',
          ],
          tenant: {
            id: 1,
            name: 'Paris Chile',
          },
          token:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW5pc3RyYWRvciIsInBlcm1pc3Npb25zIjpbIkNBTl9BQ0NFU1NfQVBQTElDQVRJT04iLCJDQU5fU0VBUkNIX09SREVSIiwiQ0FOX0FDQ0VTU19NRU5VLUNPTVBSQVMtQ0xJRU5URSIsIkNBTl9BQ0NFU1NfTUVOVS1TT0xJQ0lUVUQtTkMiLCJDQU5fQUNDRVNTX01FTlUtT0RJIiwiQ0FOX0FDQ0VTU19NRU5VLU1JUy1DQVNPUyIsIkNBTl9WSUVXX0NVU1RPTUVSLUlORk9STUFUSU9OIiwiQ0FOX1ZJRVdfQ1VTVE9NRVItQkFOSy1JTkZPUk1BVElPTiIsIkNBTl9DUkVBVEVfQ1JFRElULU5PVEUiLCJDQU5fQ1JFQVRFX0NVU1RPTUVSLUJBTkstSU5GT1JNQVRJT04iLCJDQU5fRURJVF9DVVNUT01FUi1CQU5LLUlORk9STUFUSU9OIiwiQ0FOX0NSRUFURV9SRVRVUk4iLCJDQU5fRE9XTkxPQURfUkVUVVJOLVRJQ0tFVCIsIkNBTl9TRU5EX1JFVFVSTi1USUNLRVQiLCJDQU5fRE9XTkxPQURfSU5WT0lDRSIsIkNBTl9TRU5EX0lOVk9JQ0UiLCJDQU5fRE9XTkxPQURfQ0hBTkdFLVRJQ0tFVCIsIkNBTl9TRU5EX0NIQU5HRS1USUNLRVQiLCJDQU5fRE9XTkxPQURfQ1JFRElULU5PVEUtVElDS0VUIiwiQ0FOX1NFTkRfQ1JFRElULU5PVEUtVElDS0VUIiwiQ0FOX1NFTkRfUFVSQ0hBU0UtVElDS0VUIiwiQ0FOX0FDQ0VTU19NRU5VLUdFU1RJT04tQ09MQUJPUkFET1JFUyIsIkNBTl9VU0VfRkxBR19TRUxFQ1RPUiIsIkNBTl9DUkVBVEVfU0NIRURVTElOR19IT01FLVBJQ0tVUCIsIkNBTl9JTkdSRVNTX0NMQUlNIl0sInRlbmFudCI6eyJpZCI6MSwibmFtZSI6IlBhcmlzIENoaWxlIn0sInN0b3JlIjp7ImlkIjoxLCJuYW1lIjoiUGFyaXMgQWx0byBMYXMgQ29uZGVzIiwiY29kZSI6IjIwIiwidGVuYW50cyI6W3siaWQiOjIsIm5hbWUiOiJKdW1ibyBDaGlsZSJ9LHsiaWQiOjEsIm5hbWUiOiJQYXJpcyBDaGlsZSJ9XX0sImlkIjozLCJjZW5jb0lkIjoiRUYwMDE3IiwibmFtZSI6IlNlcmdpbyIsImxhc3RuYW1lIjoiUG9zc2UiLCJlbWFpbCI6InNlcmdpby5wb3NzZUBleHRlcm5vcy1hci5jZW5jb3N1ZC5jb20iLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTY3ODI1MTc5N30.RX6QnJ1Tj5zejG2bHIocgNaIs2sPHaFmIbf5PBX5MhuYtEhTOcmfga_vwmjcrXVu34XCQhJRkP3fCWb_NBC_81Z6fGAgUPsaF2jM7DshiG0qVLB0Tk2z_PwH9Z2L6bsg-M0KSEW6nS2atYwjkAsLKpf1trHjQifMf1-eD5zHbSw',
        },
        {
          role: 'Backoffice',
          permissions: [
            'CAN_ACCESS_APPLICATION',
            'CAN_SEARCH_ORDER',
            'CAN_ACCESS_MENU-COMPRAS-CLIENTE',
            'CAN_ACCESS_MENU-SOLICITUD-NC',
            'CAN_ACCESS_MENU-ODI',
            'CAN_ACCESS_MENU-MIS-CASOS',
            'CAN_VIEW_CUSTOMER-INFORMATION',
            'CAN_VIEW_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_CREDIT-NOTE',
            'CAN_CREATE_CUSTOMER-BANK-INFORMATION',
            'CAN_EDIT_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_RETURN',
            'CAN_DOWNLOAD_RETURN-TICKET',
            'CAN_SEND_RETURN-TICKET',
            'CAN_DOWNLOAD_INVOICE',
            'CAN_SEND_INVOICE',
            'CAN_DOWNLOAD_CHANGE-TICKET',
            'CAN_SEND_CHANGE-TICKET',
            'CAN_DOWNLOAD_CREDIT-NOTE-TICKET',
            'CAN_SEND_CREDIT-NOTE-TICKET',
            'CAN_SEND_PURCHASE-TICKET',
            'CAN_CREATE_SCHEDULING_HOME-PICKUP',
          ],
          tenant: {
            id: 1,
            name: 'Paris Chile',
          },
          token:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQmFja29mZmljZSIsInBlcm1pc3Npb25zIjpbIkNBTl9BQ0NFU1NfQVBQTElDQVRJT04iLCJDQU5fU0VBUkNIX09SREVSIiwiQ0FOX0FDQ0VTU19NRU5VLUNPTVBSQVMtQ0xJRU5URSIsIkNBTl9BQ0NFU1NfTUVOVS1TT0xJQ0lUVUQtTkMiLCJDQU5fQUNDRVNTX01FTlUtT0RJIiwiQ0FOX0FDQ0VTU19NRU5VLU1JUy1DQVNPUyIsIkNBTl9WSUVXX0NVU1RPTUVSLUlORk9STUFUSU9OIiwiQ0FOX1ZJRVdfQ1VTVE9NRVItQkFOSy1JTkZPUk1BVElPTiIsIkNBTl9DUkVBVEVfQ1JFRElULU5PVEUiLCJDQU5fQ1JFQVRFX0NVU1RPTUVSLUJBTkstSU5GT1JNQVRJT04iLCJDQU5fRURJVF9DVVNUT01FUi1CQU5LLUlORk9STUFUSU9OIiwiQ0FOX0NSRUFURV9SRVRVUk4iLCJDQU5fRE9XTkxPQURfUkVUVVJOLVRJQ0tFVCIsIkNBTl9TRU5EX1JFVFVSTi1USUNLRVQiLCJDQU5fRE9XTkxPQURfSU5WT0lDRSIsIkNBTl9TRU5EX0lOVk9JQ0UiLCJDQU5fRE9XTkxPQURfQ0hBTkdFLVRJQ0tFVCIsIkNBTl9TRU5EX0NIQU5HRS1USUNLRVQiLCJDQU5fRE9XTkxPQURfQ1JFRElULU5PVEUtVElDS0VUIiwiQ0FOX1NFTkRfQ1JFRElULU5PVEUtVElDS0VUIiwiQ0FOX1NFTkRfUFVSQ0hBU0UtVElDS0VUIiwiQ0FOX0NSRUFURV9TQ0hFRFVMSU5HX0hPTUUtUElDS1VQIl0sInRlbmFudCI6eyJpZCI6MSwibmFtZSI6IlBhcmlzIENoaWxlIn0sInN0b3JlIjp7ImlkIjoxLCJuYW1lIjoiUGFyaXMgQWx0byBMYXMgQ29uZGVzIiwiY29kZSI6IjIwIiwidGVuYW50cyI6W3siaWQiOjIsIm5hbWUiOiJKdW1ibyBDaGlsZSJ9LHsiaWQiOjEsIm5hbWUiOiJQYXJpcyBDaGlsZSJ9XX0sImlkIjozLCJjZW5jb0lkIjoiRUYwMDE3IiwibmFtZSI6IlNlcmdpbyIsImxhc3RuYW1lIjoiUG9zc2UiLCJlbWFpbCI6InNlcmdpby5wb3NzZUBleHRlcm5vcy1hci5jZW5jb3N1ZC5jb20iLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTY3ODI1MTc5N30.nwu64jYqNJeIV2nTAE0LrVDbvNaLjmB6rZcpUs6LlOnj9NfMf1oH91z-ulA-oczqKPK560IU3rrbCEHUWNrJQZ-IDoXoVi7Ghv0XbXbcTbqMIG4QNnKHFgN12nv3TR9Tf55mEV7Qv4Fnrrf8GV07HnZEgVf_7xTWnPXhtMYrLI8',
        },
        {
          role: 'Administrador',
          permissions: [
            'CAN_ACCESS_APPLICATION',
            'CAN_ACCESS_MENU-COMPRAS-CLIENTE',
            'CAN_ACCESS_MENU-SOLICITUD-NC',
            'CAN_ACCESS_MENU-ODI',
            'CAN_ACCESS_MENU-MIS-CASOS',
            'CAN_VIEW_CUSTOMER-INFORMATION',
            'CAN_VIEW_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_CREDIT-NOTE',
            'CAN_CREATE_CUSTOMER-BANK-INFORMATION',
            'CAN_EDIT_CUSTOMER-BANK-INFORMATION',
            'CAN_CREATE_RETURN',
            'CAN_DOWNLOAD_RETURN-TICKET',
            'CAN_SEND_RETURN-TICKET',
            'CAN_DOWNLOAD_INVOICE',
            'CAN_SEND_INVOICE',
            'CAN_DOWNLOAD_CHANGE-TICKET',
            'CAN_SEND_CHANGE-TICKET',
            'CAN_DOWNLOAD_CREDIT-NOTE-TICKET',
            'CAN_SEND_CREDIT-NOTE-TICKET',
            'CAN_SEND_PURCHASE-TICKET',
            'CAN_SEARCH_ORDER',
            'CAN_ACCESS_MENU-GESTION-COLABORADORES',
          ],
          tenant: {
            id: 2,
            name: 'Jumbo Chile',
          },
          token:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW5pc3RyYWRvciIsInBlcm1pc3Npb25zIjpbIkNBTl9BQ0NFU1NfQVBQTElDQVRJT04iLCJDQU5fQUNDRVNTX01FTlUtQ09NUFJBUy1DTElFTlRFIiwiQ0FOX0FDQ0VTU19NRU5VLVNPTElDSVRVRC1OQyIsIkNBTl9BQ0NFU1NfTUVOVS1PREkiLCJDQU5fQUNDRVNTX01FTlUtTUlTLUNBU09TIiwiQ0FOX1ZJRVdfQ1VTVE9NRVItSU5GT1JNQVRJT04iLCJDQU5fVklFV19DVVNUT01FUi1CQU5LLUlORk9STUFUSU9OIiwiQ0FOX0NSRUFURV9DUkVESVQtTk9URSIsIkNBTl9DUkVBVEVfQ1VTVE9NRVItQkFOSy1JTkZPUk1BVElPTiIsIkNBTl9FRElUX0NVU1RPTUVSLUJBTkstSU5GT1JNQVRJT04iLCJDQU5fQ1JFQVRFX1JFVFVSTiIsIkNBTl9ET1dOTE9BRF9SRVRVUk4tVElDS0VUIiwiQ0FOX1NFTkRfUkVUVVJOLVRJQ0tFVCIsIkNBTl9ET1dOTE9BRF9JTlZPSUNFIiwiQ0FOX1NFTkRfSU5WT0lDRSIsIkNBTl9ET1dOTE9BRF9DSEFOR0UtVElDS0VUIiwiQ0FOX1NFTkRfQ0hBTkdFLVRJQ0tFVCIsIkNBTl9ET1dOTE9BRF9DUkVESVQtTk9URS1USUNLRVQiLCJDQU5fU0VORF9DUkVESVQtTk9URS1USUNLRVQiLCJDQU5fU0VORF9QVVJDSEFTRS1USUNLRVQiLCJDQU5fU0VBUkNIX09SREVSIiwiQ0FOX0FDQ0VTU19NRU5VLUdFU1RJT04tQ09MQUJPUkFET1JFUyJdLCJ0ZW5hbnQiOnsiaWQiOjIsIm5hbWUiOiJKdW1ibyBDaGlsZSJ9LCJzdG9yZSI6eyJpZCI6MSwibmFtZSI6IlBhcmlzIEFsdG8gTGFzIENvbmRlcyIsImNvZGUiOiIyMCIsInRlbmFudHMiOlt7ImlkIjoyLCJuYW1lIjoiSnVtYm8gQ2hpbGUifSx7ImlkIjoxLCJuYW1lIjoiUGFyaXMgQ2hpbGUifV19LCJpZCI6MywiY2VuY29JZCI6IkVGMDAxNyIsIm5hbWUiOiJTZXJnaW8iLCJsYXN0bmFtZSI6IlBvc3NlIiwiZW1haWwiOiJzZXJnaW8ucG9zc2VAZXh0ZXJub3MtYXIuY2VuY29zdWQuY29tIiwiZGVsZXRlZEF0IjpudWxsLCJpYXQiOjE2NzgyNTE3OTd9.fRXLm09LaDnuiMLiTRuevaohrsm5jK9rvXUYXmYUQ6v8o8RgjdgVD0dta2DjkQFRpw8dXYOuSsDdWbqofhlv-UfHrJUYhtxyhrde2usaghJkbWI0OxAJlvyd43mkyWjxVRhAdB_yCmrQPjLM0_zmCqNhpL_yhVEyWv4XRmCVh0Q',
        },
      ],
    },
  },
};