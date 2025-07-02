-- Restaurant Industry Knowledge Base Seed Data
-- Run this after your MCP server is deployed to populate with industry intelligence

-- Insert key restaurant technology companies
INSERT INTO knowledge_entities (name, type, description, industry_relevance, key_facts, strategic_importance) VALUES
('Toast', 'company', 'Leading restaurant POS and management platform', 
 '{"restaurant_industry": "critical", "market_share": "high", "growth_rate": "rapid"}',
 '["$2.7B revenue 2023", "68,000+ restaurant locations", "IPO 2021", "Cloud-based platform"]',
 'Platform play - POS + payments + analytics + delivery integration. Critical infrastructure for modern restaurants.'),

('DoorDash', 'company', 'Dominant food delivery marketplace in US',
 '{"restaurant_industry": "critical", "market_share": "65%", "impact": "revenue_and_cost"}',
 '["65% US delivery market share", "27% commission rates", "500,000+ merchant partners"]',
 'Love-hate relationship - necessary evil for most restaurants. High revenue potential but margin pressure.'),

('Uber Eats', 'company', 'Major food delivery platform',
 '{"restaurant_industry": "important", "market_share": "25%", "impact": "revenue_channel"}',
 '["25% US market share", "Lower commission than DoorDash", "Global presence"]',
 'Secondary delivery option for most restaurants. Often used for market expansion.'),

('Square', 'company', 'Small business POS and payment processing',
 '{"restaurant_industry": "important", "segment": "small_business", "ease_of_use": "high"}',
 '["Simple setup", "Transparent pricing", "Hardware + software bundle"]',
 'Popular with small cafes and quick-service restaurants. Easy entry point for technology adoption.'),

('Resy', 'company', 'Restaurant reservation platform',
 '{"restaurant_industry": "important", "segment": "full_service", "competition": "OpenTable"}',
 '["Owned by American Express", "Focus on premium dining", "Customer data insights"]',
 'Alternative to OpenTable, especially for higher-end establishments. Better customer experience focus.'),

('Kitchen United', 'company', 'Ghost kitchen operator',
 '{"restaurant_industry": "emerging", "model": "ghost_kitchen", "growth": "rapid"}',
 '["100+ kitchen locations", "Multi-brand concepts", "Delivery-only model"]',
 'Represents shift toward off-premise dining. Lower overhead model for restaurant expansion.'),

-- Insert key restaurant technologies
('POS Systems', 'technology', 'Point of sale and restaurant management platforms',
 '{"criticality": "essential", "adoption_rate": "universal", "cost_impact": "high"}',
 '["$50-200/month per terminal", "Core restaurant infrastructure", "Integration hub"]',
 'Central nervous system of restaurant operations. Affects everything from orders to analytics.'),

('Kitchen Display Systems', 'technology', 'Digital order management for kitchen operations',
 '{"efficiency_gain": "high", "labor_impact": "positive", "accuracy": "improved"}',
 '["15-30% faster ticket times", "Reduces paper waste", "Real-time order tracking"]',
 'Modernizes kitchen workflow. Particularly valuable for high-volume operations and delivery integration.'),

('AI Kitchen Automation', 'technology', 'Automated cooking and food preparation systems',
 '{"adoption_stage": "early", "labor_savings": "20-30%", "investment": "high"}',
 '["$15,000-50,000 initial investment", "12-18 month ROI", "Consistency improvements"]',
 'Addresses labor shortage directly. High upfront cost but significant ongoing savings for right operators.'),

('Delivery Integration APIs', 'technology', 'Software connecting restaurants to delivery platforms',
 '{"importance": "critical", "complexity": "medium", "cost_savings": "moderate"}',
 '["Single dashboard for all platforms", "Menu synchronization", "Order consolidation"]',
 'Essential for multi-platform delivery strategy. Reduces operational complexity and errors.'),

('Inventory Management Systems', 'technology', 'Automated food cost and waste tracking',
 '{"roi": "high", "complexity": "medium", "food_cost_reduction": "15-25%"}',
 '["Real-time cost tracking", "Automated ordering", "Waste reduction analytics"]',
 'Direct impact on food costs - typically 28-35% of revenue. Quick payback for most operators.'),

-- Insert current industry trends
INSERT INTO industry_trends (topic, trend_description, significance_level, timeline, impact_areas, relevant_keywords) VALUES
('labor_shortage', 'Chronic staffing challenges across all restaurant segments with 75% of operators reporting difficulty hiring', 10, 'ongoing crisis', 
 '["operations", "customer_service", "profitability", "automation_adoption"]',
 '["labor shortage", "staffing crisis", "wage inflation", "employee retention"]'),

('delivery_transformation', 'Permanent shift toward off-premise dining with 60% of sales now takeout/delivery vs 40% pre-COVID', 9, 'permanent change',
 '["kitchen_design", "menu_optimization", "technology_stack", "profit_margins"]', 
 '["delivery", "ghost kitchens", "off-premise", "third-party platforms"]'),

('automation_adoption', 'Accelerating adoption of kitchen automation and AI to address labor shortage and improve consistency', 8, 'early adoption phase',
 '["kitchen_operations", "labor_costs", "food_quality", "training_requirements"]',
 '["kitchen automation", "AI", "robotics", "labor replacement"]'),

('inflation_pressure', 'Rising costs for labor, food, and rent squeezing already thin margins below 3% for many operators', 9, 'ongoing challenge',
 '["menu_pricing", "portion_control", "operational_efficiency", "customer_retention"]',
 '["inflation", "food costs", "labor costs", "margin pressure"]'),

('technology_integration', 'Demand for unified technology stacks that integrate POS, delivery, inventory, and analytics', 7, 'current focus',
 '["operational_efficiency", "data_insights", "staff_training", "vendor_management"]',
 '["integration", "unified platforms", "data analytics", "tech stack"]'),

-- Insert brand writing guidelines
INSERT INTO brand_guidelines (guideline_category, guideline_name, guideline_description, do_examples, dont_examples, applies_to, priority_level) VALUES
('voice_tone', 'Bill Bryson Conversational Style', 'Write from personal experience with warm, observational tone and self-deprecating humor',
 '["I think what surprised me most...", "Maybe it''s just me, but...", "The thing that struck me was..."]',
 '["Delve into", "At its core", "Game-changing", "Cutting-edge", "Streamline"]',
 '["blog_content", "social_posts"]', 1),

('restaurant_context', 'Industry Reality Check', 'Always acknowledge the practical challenges restaurant operators face',
 '["With margins already at 3-5%...", "Given the current labor shortage...", "For restaurants running lean..."]',
 '["This revolutionary solution...", "Transform your entire business...", "Effortlessly streamline..."]',
 '["blog_content", "analysis"]', 1),

('financial_focus', 'ROI and Cost Impact', 'Lead with specific financial implications and realistic implementation timelines',
 '["$40,000 annual savings", "18-month payback period", "Reduces labor costs by 25%"]',
 '["Significant savings", "Improved efficiency", "Cost-effective solution"]',
 '["blog_content", "social_posts", "analysis"]', 1),

('authenticity', 'Real Experience Over Hype', 'Share genuine observations and honest assessments rather than marketing claims',
 '["In my experience visiting restaurants...", "The reality is...", "What I''ve observed..."]',
 '["This amazing breakthrough...", "Unprecedented innovation...", "Revolutionary technology..."]',
 '["blog_content"]', 1);

-- Sample competitor blacklist (add companies you want to avoid mentioning)
INSERT INTO competitor_blacklist (company_name, restriction_level, reasoning, alternative_references, is_active) VALUES
('Competitor Restaurant Tech Co', 'full_blacklist', 'Direct competitor - avoid all mentions', 
 '["leading POS providers", "major restaurant technology companies"]', true),

('Another Competitor', 'mention_only_if_necessary', 'Indirect competitor - mention only for essential industry context',
 '["established industry players", "traditional providers"]', true);
