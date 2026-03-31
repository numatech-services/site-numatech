// Test de l'API Leads
// Exécuter avec: node scripts/test-api.js

const testLead = {
  name: "Jean Dupont",
  email: "jean.dupont@example.fr",
  organisation: "Collège Victor Hugo",
  type: "audit",
  size: "120 postes",
  message: "Nous souhaitons moderniser notre infrastructure IT et sécuriser notre réseau.",
  status: "new"
};

async function testAPI() {
  try {
    const response = await fetch('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testLead)
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Lead créé avec succès:', data);
    } else {
      console.error('❌ Erreur:', data);
    }
  } catch (error) {
    console.error('❌ Erreur de connexion:', error);
  }
}

// Tester la récupération des leads
async function testGetLeads() {
  try {
    const response = await fetch('http://localhost:3000/api/leads');
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Leads récupérés:', data.leads.length, 'leads');
      console.log(data.leads);
    } else {
      console.error('❌ Erreur:', data);
    }
  } catch (error) {
    console.error('❌ Erreur de connexion:', error);
  }
}

console.log('🧪 Test de l\'API Leads...\n');
console.log('1️⃣ Création d\'un lead:');
testAPI().then(() => {
  console.log('\n2️⃣ Récupération des leads:');
  return testGetLeads();
});
