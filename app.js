// Royal Enfield Bike Finder JavaScript

// Bike Database
const bikesData = [
    {
        id: "hunter-350",
        name: "Hunter 350",
        segment: "350cc Roadster",
        category: "Roadster",
        price: "₹1.38 - 1.67 Lakh",
        engineCapacity: "349cc",
        power: "20.21 PS",
        torque: "27 Nm",
        mileage: "36.2 kmpl",
        weight: "181 kg",
        seatHeight: "800 mm",
        fuelCapacity: "15 L",
        images: ["images/hunter-350-1.jpg", "images/hunter-350-2.jpg", "images/hunter-350-3.jpg", "images/hunter-350-4.jpg", "images/hunter-350-5.jpg"],
        description: "The lightest and most agile Royal Enfield, perfect for city commuting and young riders",
        bestFor: ["City commuting", "Young riders", "First-time RE buyers", "Fuel efficiency"],
        terrain: ["City roads", "Highway cruising"],
        experience: "Beginner to Intermediate",
        priceRange: "budget"
    },
    {
        id: "classic-350",
        name: "Classic 350",
        segment: "350cc Classic",
        category: "Classic",
        price: "₹1.81 - 2.16 Lakh",
        engineCapacity: "349cc",
        power: "20.21 PS",
        torque: "27 Nm",
        mileage: "41.55 kmpl",
        weight: "195 kg",
        seatHeight: "805 mm",
        fuelCapacity: "13 L",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
        description: "The quintessential Royal Enfield with timeless design and modern reliability",
        bestFor: ["Heritage lovers", "Daily commuting", "Weekend touring", "Classic styling"],
        terrain: ["City roads", "Highway", "Light touring"],
        experience: "Beginner to Advanced",
        priceRange: "budget"
    },
    {
        id: "bullet-350",
        name: "Bullet 350",
        segment: "350cc Classic",
        category: "Classic",
        price: "₹1.60 - 2.02 Lakh",
        engineCapacity: "349cc",
        power: "20.21 PS",
        torque: "27 Nm",
        mileage: "37 kmpl",
        weight: "187 kg",
        seatHeight: "805 mm",
        fuelCapacity: "13.5 L",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
        description: "The original Royal Enfield with authentic vintage character",
        bestFor: ["Purists", "Heritage enthusiasts", "Custom builders", "Authentic experience"],
        terrain: ["City roads", "Highway", "Rural roads"],
        experience: "Intermediate to Advanced",
        priceRange: "budget"
    },
    {
        id: "meteor-350",
        name: "Meteor 350",
        segment: "350cc Cruiser",
        category: "Cruiser",
        price: "₹1.96 - 2.16 Lakh",
        engineCapacity: "349cc",
        power: "20.21 PS",
        torque: "27 Nm",
        mileage: "41.88 kmpl",
        weight: "191 kg",
        seatHeight: "765 mm",
        fuelCapacity: "15 L",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
        description: "Modern cruiser with comfortable ergonomics and Tripper Navigation",
        bestFor: ["Long touring", "Comfortable cruising", "Highway rides", "Modern features"],
        terrain: ["Highway", "Long distance", "City roads"],
        experience: "Beginner to Advanced",
        priceRange: "budget"
    },
    {
        id: "himalayan-450",
        name: "Himalayan 450",
        segment: "450cc Adventure",
        category: "Adventure",
        price: "₹3.06 - 3.20 Lakh",
        engineCapacity: "452cc",
        power: "40.02 PS",
        torque: "40 Nm",
        mileage: "30 kmpl",
        weight: "196 kg",
        seatHeight: "825 mm",
        fuelCapacity: "17 L",
        image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&q=80",
        description: "The ultimate adventure tourer with liquid-cooled engine and modern features",
        bestFor: ["Adventure touring", "Off-road riding", "Long expeditions", "All-terrain"],
        terrain: ["Off-road", "Mountains", "Highway", "All terrains"],
        experience: "Intermediate to Advanced",
        priceRange: "premium"
    },
    {
        id: "guerrilla-450",
        name: "Guerrilla 450",
        segment: "450cc Roadster",
        category: "Roadster",
        price: "₹2.56 - 2.72 Lakh",
        engineCapacity: "452cc",
        power: "40.02 PS",
        torque: "40 Nm",
        mileage: "29.5 kmpl",
        weight: "185 kg",
        seatHeight: "780 mm",
        fuelCapacity: "11 L",
        image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=800&q=80",
        description: "Modern roadster with liquid-cooled performance and street-focused design",
        bestFor: ["Urban performance", "Street riding", "Modern styling", "Power seekers"],
        terrain: ["City roads", "Highway", "Twisty roads"],
        experience: "Intermediate to Advanced",
        priceRange: "mid"
    },
    {
        id: "scram-440",
        name: "Scram 440",
        segment: "440cc Scrambler",
        category: "Scrambler",
        price: "₹2.23 - 2.31 Lakh",
        engineCapacity: "443cc",
        power: "25.42 PS",
        torque: "34 Nm",
        mileage: "29.5 kmpl",
        weight: "185 kg",
        seatHeight: "795 mm",
        fuelCapacity: "15 L",
        image: "https://images.unsplash.com/photo-1603373958546-15f2ad51ff49?w=800&q=80",
        description: "Versatile scrambler for both city streets and light off-roading",
        bestFor: ["City + adventure", "Versatile riding", "Light off-road", "Scrambler styling"],
        terrain: ["City roads", "Light off-road", "Gravel roads"],
        experience: "Intermediate",
        priceRange: "mid"
    },
    {
        id: "interceptor-650",
        name: "Interceptor 650",
        segment: "650cc Standard",
        category: "Standard",
        price: "₹3.32 - 3.63 Lakh",
        engineCapacity: "648cc",
        power: "47.4 PS",
        torque: "52 Nm",
        mileage: "25 kmpl",
        weight: "202 kg",
        seatHeight: "804 mm",
        fuelCapacity: "13.7 L",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
        description: "Twin-cylinder performance with classic British styling",
        bestFor: ["Highway cruising", "Power lovers", "Twin cylinder experience", "Retro styling"],
        terrain: ["Highway", "City roads", "Long touring"],
        experience: "Intermediate to Advanced",
        priceRange: "premium"
    },
    {
        id: "continental-gt-650",
        name: "Continental GT 650",
        segment: "650cc Cafe Racer",
        category: "Cafe Racer",
        price: "₹3.50 - 3.78 Lakh",
        engineCapacity: "648cc",
        power: "47.4 PS",
        torque: "52 Nm",
        mileage: "27 kmpl",
        weight: "211 kg",
        seatHeight: "804 mm",
        fuelCapacity: "12.5 L",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        description: "Sporty cafe racer with aggressive riding position and vintage racing heritage",
        bestFor: ["Sport riding", "Cafe racer style", "Performance enthusiasts", "Track days"],
        terrain: ["Twisty roads", "Highway", "Track"],
        experience: "Advanced",
        priceRange: "premium"
    },
    {
        id: "super-meteor-650",
        name: "Super Meteor 650",
        segment: "650cc Cruiser",
        category: "Cruiser",
        price: "₹3.99 - 4.32 Lakh",
        engineCapacity: "648cc",
        power: "47 PS",
        torque: "52 Nm",
        mileage: "25 kmpl",
        weight: "241 kg",
        seatHeight: "740 mm",
        fuelCapacity: "15.7 L",
        image: "https://images.unsplash.com/photo-1572919822115-cc9887d6a942?w=800&q=80",
        description: "Premium cruiser with laid-back riding position and luxury features",
        bestFor: ["Long touring", "Luxury cruising", "Highway comfort", "Premium experience"],
        terrain: ["Highway", "Long distance", "Touring"],
        experience: "Intermediate to Advanced",
        priceRange: "premium"
    }
];

// Questionnaire Data
const questionnaire = [
    {
        id: "budget",
        type: "radio",
        question: "What's your budget range?",
        options: [
            { value: "budget", label: "Under ₹2 Lakh" },
            { value: "mid", label: "₹2-3 Lakh" },
            { value: "premium", label: "Above ₹3 Lakh" }
        ]
    },
    {
        id: "experience",
        type: "radio",
        question: "What's your riding experience?",
        options: [
            { value: "beginner", label: "New to riding (0-2 years)" },
            { value: "intermediate", label: "Some experience (2-5 years)" },
            { value: "advanced", label: "Experienced rider (5+ years)" }
        ]
    },
    {
        id: "usage",
        type: "radio",
        question: "What's your primary riding purpose?",
        options: [
            { value: "commuting", label: "Daily commuting" },
            { value: "touring", label: "Long distance touring" },
            { value: "weekend", label: "Weekend pleasure rides" },
            { value: "adventure", label: "Adventure & off-road" }
        ]
    },
    {
        id: "terrain",
        type: "checkbox",
        question: "What terrains will you ride on? (Select all that apply)",
        options: [
            { value: "city", label: "City roads" },
            { value: "highway", label: "Highways" },
            { value: "offroad", label: "Off-road trails" },
            { value: "mountains", label: "Mountain roads" }
        ]
    },
    {
        id: "style",
        type: "radio",
        question: "Which style appeals to you most?",
        options: [
            { value: "classic", label: "Timeless heritage look" },
            { value: "modern", label: "Modern and sporty" },
            { value: "cruiser", label: "Relaxed cruiser" },
            { value: "adventure", label: "Rugged adventure" }
        ]
    },
    {
        id: "engine",
        type: "radio",
        question: "Engine preference?",
        options: [
            { value: "350cc", label: "350cc Single cylinder" },
            { value: "450cc", label: "450cc Single cylinder" },
            { value: "650cc", label: "650cc Twin cylinder" },
            { value: "no-preference", label: "No preference" }
        ]
    },
    {
        id: "features",
        type: "checkbox",
        question: "Which features matter most? (Select all important)",
        options: [
            { value: "fuel-efficiency", label: "Fuel efficiency" },
            { value: "power", label: "High power" },
            { value: "comfort", label: "Riding comfort" },
            { value: "technology", label: "Modern features" }
        ]
    },
    {
        id: "height",
        type: "radio",
        question: "Your height consideration?",
        options: [
            { value: "short", label: "Prefer lower seat height (under 5'6\")" },
            { value: "medium", label: "Average height fine (5'6\" - 6')" },
            { value: "tall", label: "Comfortable with tall bikes (6'+)" }
        ]
    }
];

// Application State
let currentQuestion = 0;
let userAnswers = {};
let comparisonList = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    displayAllBikes();
});

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    const sections = ['home', 'questionnaire', 'recommendations', 'all-bikes', 'comparison'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
    
    // Show requested section
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Questionnaire Functions
function startQuestionnaire() {
    currentQuestion = 0;
    userAnswers = {};
    showSection('questionnaire');
    displayQuestion();
}

function displayQuestion() {
    const question = questionnaire[currentQuestion];
    const questionContainer = document.getElementById('question-content');
    
    let html = `<div class="question-title">${question.question}</div>`;
    html += '<div class="question-options">';
    
    question.options.forEach((option, index) => {
        const inputType = question.type === 'radio' ? 'radio' : 'checkbox';
        const name = question.type === 'radio' ? question.id : `${question.id}[]`;
        const checked = userAnswers[question.id] && 
                       (question.type === 'radio' ? userAnswers[question.id] === option.value : 
                        userAnswers[question.id].includes(option.value)) ? 'checked' : '';
        
        html += `
            <div class="option-item ${checked ? 'selected' : ''}" onclick="selectOption('${question.id}', '${option.value}', '${question.type}')">
                <input type="${inputType}" name="${name}" value="${option.value}" ${checked}>
                <span>${option.label}</span>
            </div>
        `;
    });
    
    html += '</div>';
    questionContainer.innerHTML = html;
    
    // Update progress
    updateProgress();
    updateNavigation();
}

function selectOption(questionId, value, type) {
    if (type === 'radio') {
        userAnswers[questionId] = value;
    } else {
        if (!userAnswers[questionId]) {
            userAnswers[questionId] = [];
        }
        
        if (userAnswers[questionId].includes(value)) {
            userAnswers[questionId] = userAnswers[questionId].filter(v => v !== value);
        } else {
            userAnswers[questionId].push(value);
        }
    }
    
    // Update UI
    displayQuestion();
}

function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('current-question');
    const totalQuestions = document.getElementById('total-questions');
    
    const progress = ((currentQuestion + 1) / questionnaire.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = currentQuestion + 1;
    totalQuestions.textContent = questionnaire.length;
}

function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.style.display = currentQuestion > 0 ? 'inline-block' : 'none';
    
    if (currentQuestion === questionnaire.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function nextQuestion() {
    const currentQ = questionnaire[currentQuestion];
    if (!userAnswers[currentQ.id] || 
        (Array.isArray(userAnswers[currentQ.id]) && userAnswers[currentQ.id].length === 0)) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    if (currentQuestion < questionnaire.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function submitQuestionnaire() {
    const recommendations = generateRecommendations();
    displayRecommendations(recommendations);
    showSection('recommendations');
}

// Recommendation Engine
function generateRecommendations() {
    const scores = {};
    
    // Initialize scores
    bikesData.forEach(bike => {
        scores[bike.id] = 0;
    });
    
    // Calculate scores based on answers
    bikesData.forEach(bike => {
        let score = 0;
        
        // Budget matching
        if (userAnswers.budget && bike.priceRange === userAnswers.budget) {
            score += 30;
        }
        
        // Experience matching
        if (userAnswers.experience) {
            if (userAnswers.experience === 'beginner' && bike.experience.includes('Beginner')) {
                score += 25;
            } else if (userAnswers.experience === 'intermediate') {
                score += 20;
            } else if (userAnswers.experience === 'advanced' && bike.experience.includes('Advanced')) {
                score += 25;
            }
        }
        
        // Usage matching
        if (userAnswers.usage) {
            if (userAnswers.usage === 'commuting' && bike.bestFor.some(use => use.toLowerCase().includes('commut'))) {
                score += 20;
            } else if (userAnswers.usage === 'touring' && bike.bestFor.some(use => use.toLowerCase().includes('tour'))) {
                score += 25;
            } else if (userAnswers.usage === 'adventure' && bike.category === 'Adventure') {
                score += 30;
            } else if (userAnswers.usage === 'weekend' && bike.bestFor.some(use => use.toLowerCase().includes('weekend'))) {
                score += 20;
            }
        }
        
        // Style matching
        if (userAnswers.style) {
            if (userAnswers.style === 'classic' && bike.category === 'Classic') {
                score += 25;
            } else if (userAnswers.style === 'modern' && (bike.category === 'Roadster' || bike.category === 'Cafe Racer')) {
                score += 25;
            } else if (userAnswers.style === 'cruiser' && bike.category === 'Cruiser') {
                score += 30;
            } else if (userAnswers.style === 'adventure' && bike.category === 'Adventure') {
                score += 30;
            }
        }
        
        // Engine preference
        if (userAnswers.engine && userAnswers.engine !== 'no-preference') {
            if (bike.segment.includes(userAnswers.engine)) {
                score += 20;
            }
        }
        
        // Features matching
        if (userAnswers.features) {
            if (userAnswers.features.includes('fuel-efficiency') && parseInt(bike.mileage) > 35) {
                score += 15;
            }
            if (userAnswers.features.includes('power') && parseInt(bike.power) > 40) {
                score += 15;
            }
            if (userAnswers.features.includes('comfort') && bike.bestFor.some(f => f.toLowerCase().includes('comfort'))) {
                score += 15;
            }
        }
        
        // Height consideration
        if (userAnswers.height) {
            if (userAnswers.height === 'short' && parseInt(bike.seatHeight) < 780) {
                score += 10;
            } else if (userAnswers.height === 'tall' && parseInt(bike.seatHeight) > 810) {
                score += 10;
            }
        }
        
        scores[bike.id] = score;
    });
    
    // Sort bikes by score and return top 3
    const sortedBikes = Object.keys(scores)
        .map(bikeId => ({
            bike: bikesData.find(b => b.id === bikeId),
            score: scores[bikeId]
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    return sortedBikes;
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommended-bikes');
    let html = '';
    
    recommendations.forEach((rec, index) => {
        const bike = rec.bike;
        html += createBikeCard(bike, true, `Recommendation #${index + 1}`);
    });
    
    container.innerHTML = html;
}

// Bike Display Functions
function displayAllBikes() {
    const container = document.getElementById('all-bikes-grid');
    let html = '';
    
    bikesData.forEach(bike => {
        html += createBikeCard(bike, false);
    });
    
    container.innerHTML = html;
}

function createBikeCard(bike, isRecommended = false, recommendationRank = '') {
    const isInComparison = comparisonList.some(b => b.id === bike.id);
    
    return `
        <div class="bike-card ${isRecommended ? 'recommended' : ''}" onclick="showBikeDetail('${bike.id}')">
            <img src="${bike.image[0]}" alt="${bike.name}" class="bike-image">
            <div class="bike-info">
                <h3 class="bike-name">${bike.name}</h3>
                <p class="bike-segment">${bike.segment}</p>
                <p class="bike-price">${bike.price}</p>
                
                <div class="bike-specs">
                    <div class="spec-item">
                        <span>Engine:</span>
                        <span>${bike.engineCapacity}</span>
                    </div>
                    <div class="spec-item">
                        <span>Power:</span>
                        <span>${bike.power}</span>
                    </div>
                    <div class="spec-item">
                        <span>Mileage:</span>
                        <span>${bike.mileage}</span>
                    </div>
                    <div class="spec-item">
                        <span>Weight:</span>
                        <span>${bike.weight}</span>
                    </div>
                </div>
                
                <p class="bike-description">${bike.description}</p>
                
                <div class="bike-best-for">
                    <h4>Best For:</h4>
                    <div class="best-for-tags">
                        ${bike.bestFor.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="bike-actions">
                    <button class="btn btn--outline btn--small" onclick="event.stopPropagation(); toggleComparison('${bike.id}')">
                        ${isInComparison ? 'Remove from Compare' : 'Add to Compare'}
                    </button>
                    <button class="btn btn--primary btn--small" onclick="event.stopPropagation(); showBikeDetail('${bike.id}')">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showBikeDetail(bikeId) {
    const bike = bikesData.find(b => b.id === bikeId);
    const modal = document.getElementById('bike-modal');
    const content = document.getElementById('bike-detail-content');
    
    content.innerHTML = `
        <h2>${bike.name}</h2>
        bike.images.forEach(img => { detailHtml += `<img src="${img}" class="bike-detail-photo">`});
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
            <div>
                <h3>Specifications</h3>
                <p><strong>Engine:</strong> ${bike.engineCapacity}</p>
                <p><strong>Power:</strong> ${bike.power}</p>
                <p><strong>Torque:</strong> ${bike.torque}</p>
                <p><strong>Mileage:</strong> ${bike.mileage}</p>
                <p><strong>Weight:</strong> ${bike.weight}</p>
                <p><strong>Seat Height:</strong> ${bike.seatHeight}</p>
                <p><strong>Fuel Capacity:</strong> ${bike.fuelCapacity}</p>
            </div>
            
            <div>
                <h3>Details</h3>
                <p><strong>Category:</strong> ${bike.category}</p>
                <p><strong>Price:</strong> ${bike.price}</p>
                <p><strong>Experience Level:</strong> ${bike.experience}</p>
                <h4>Best For:</h4>
                <ul>
                    ${bike.bestFor.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div>
            <h3>Description</h3>
            <p>${bike.description}</p>
        </div>
        
        <div style="margin-top: 2rem;">
            <button class="btn btn--primary" onclick="toggleComparison('${bike.id}'); closeModal();">
                Add to Compare
            </button>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('bike-modal').classList.add('hidden');
}

// Comparison Functions
function toggleComparison(bikeId) {
    const bike = bikesData.find(b => b.id === bikeId);
    const existingIndex = comparisonList.findIndex(b => b.id === bikeId);
    
    if (existingIndex > -1) {
        comparisonList.splice(existingIndex, 1);
    } else {
        if (comparisonList.length < 3) {
            comparisonList.push(bike);
        } else {
            alert('You can compare maximum 3 bikes at a time.');
            return;
        }
    }
    
    // Refresh current view
    const currentSection = document.querySelector('section:not(.hidden)').id;
    if (currentSection === 'all-bikes') {
        displayAllBikes();
    }
    
    // Update comparison section
    if (comparisonList.length > 0) {
        updateComparisonSection();
    }
}

function updateComparisonSection() {
    // This could be called to update comparison UI
    // For now, we'll just log the comparison list
    console.log('Comparison list updated:', comparisonList);
}

function showComparison() {
    if (comparisonList.length < 2) {
        alert('Please select at least 2 bikes to compare.');
        return;
    }
    
    const container = document.getElementById('comparison-table');
    let html = '<div class="comparison-table"><table>';
    
    // Table header
    html += '<tr><th>Specification</th>';
    comparisonList.forEach(bike => {
        html += `<th>${bike.name}</th>`;
    });
    html += '</tr>';
    
    // Specifications rows
    const specs = [
        ['Price', 'price'],
        ['Engine', 'engineCapacity'],
        ['Power', 'power'],
        ['Torque', 'torque'],
        ['Mileage', 'mileage'],
        ['Weight', 'weight'],
        ['Seat Height', 'seatHeight'],
        ['Fuel Capacity', 'fuelCapacity'],
        ['Category', 'category']
    ];
    
    specs.forEach(([label, key]) => {
        html += `<tr><td><strong>${label}</strong></td>`;
        comparisonList.forEach(bike => {
            html += `<td>${bike[key]}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</table></div>';
    container.innerHTML = html;
    showSection('comparison');
}

// Filter Functions
function filterBikes() {
    const segmentFilter = document.getElementById('segment-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    let filteredBikes = bikesData;
    
    if (segmentFilter) {
        filteredBikes = filteredBikes.filter(bike => bike.segment.includes(segmentFilter));
    }
    
    if (categoryFilter) {
        filteredBikes = filteredBikes.filter(bike => bike.category === categoryFilter);
    }
    
    if (priceFilter) {
        filteredBikes = filteredBikes.filter(bike => bike.priceRange === priceFilter);
    }
    
    const container = document.getElementById('all-bikes-grid');
    let html = '';
    
    filteredBikes.forEach(bike => {
        html += createBikeCard(bike, false);
    });
    
    container.innerHTML = html;
}

// Event Listeners
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Add comparison button to navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add comparison button if bikes are selected
    setInterval(() => {
        const navLinks = document.querySelector('.nav-links');
        let comparisonBtn = document.getElementById('comparison-btn');
        
        if (comparisonList.length > 0 && !comparisonBtn) {
            comparisonBtn = document.createElement('button');
            comparisonBtn.id = 'comparison-btn';
            comparisonBtn.className = 'btn btn--outline';
            comparisonBtn.textContent = `Compare (${comparisonList.length})`;
            comparisonBtn.onclick = showComparison;
            navLinks.appendChild(comparisonBtn);
        } else if (comparisonList.length === 0 && comparisonBtn) {
            comparisonBtn.remove();
        } else if (comparisonBtn) {
            comparisonBtn.textContent = `Compare (${comparisonList.length})`;
        }
    }, 1000);
});
