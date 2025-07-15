
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  county TEXT,
  occupation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create training programs table
CREATE TABLE public.training_programs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  level TEXT,
  prerequisites TEXT,
  price DECIMAL(10,2),
  max_participants INTEGER,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  program_id UUID REFERENCES public.training_programs(id) ON DELETE CASCADE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  experience TEXT,
  motivation TEXT,
  status TEXT DEFAULT 'pending',
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, program_id)
);

-- Create events table
CREATE TABLE public.events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  location TEXT,
  max_participants INTEGER,
  event_type TEXT DEFAULT 'workshop',
  status TEXT DEFAULT 'upcoming',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create event registrations table
CREATE TABLE public.event_registrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  organization TEXT,
  position TEXT,
  dietary_requirements TEXT,
  expectations TEXT,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, event_id)
);

-- Create news articles table
CREATE TABLE public.news_articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  author TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for training programs (public read)
CREATE POLICY "Anyone can view training programs" ON public.training_programs
  FOR SELECT USING (true);

-- Create RLS policies for enrollments
CREATE POLICY "Users can view their own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own enrollments" ON public.enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own enrollments" ON public.enrollments
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for events (public read)
CREATE POLICY "Anyone can view events" ON public.events
  FOR SELECT USING (true);

-- Create RLS policies for event registrations
CREATE POLICY "Users can view their own event registrations" ON public.event_registrations
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own event registrations" ON public.event_registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own event registrations" ON public.event_registrations
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for news articles (public read)
CREATE POLICY "Anyone can view published news articles" ON public.news_articles
  FOR SELECT USING (status = 'published');

-- Create RLS policies for contact messages (authenticated users can insert)
CREATE POLICY "Authenticated users can create contact messages" ON public.contact_messages
  FOR INSERT TO authenticated WITH CHECK (true);

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample training programs
INSERT INTO public.training_programs (title, description, duration, level, price, max_participants) VALUES
('Certificate in Crop Production', 'Comprehensive training in modern crop production techniques', '3 months', 'Beginner', 15000.00, 30),
('Diploma in Agricultural Technology', 'Advanced agricultural technology and management', '6 months', 'Intermediate', 25000.00, 25),
('Modern Dairy Farming Course', 'Learn modern dairy farming practices and management', '2 months', 'Beginner', 12000.00, 20),
('Poultry Production & Management', 'Complete poultry farming from setup to management', '1 month', 'Beginner', 8000.00, 35),
('Sustainable Horticulture', 'Sustainable practices in fruit and vegetable production', '4 months', 'Intermediate', 18000.00, 20),
('Agricultural Entrepreneurship', 'Business skills for agricultural entrepreneurs', '2 months', 'Advanced', 20000.00, 15);

-- Insert sample events
INSERT INTO public.events (title, description, event_date, location, max_participants, event_type) VALUES
('Climate-Smart Agriculture Workshop', 'Learn about climate-resilient farming practices', '2024-02-15', 'Main Conference Hall', 50, 'workshop'),
('Organic Farming Seminar', 'Transition to organic farming methods', '2024-02-28', 'Training Center Auditorium', 40, 'seminar'),
('Agricultural Technology Expo', 'Showcase of latest agricultural technologies', '2024-03-10', 'Exhibition Grounds', 200, 'exhibition'),
('Youth in Agriculture Conference', 'Empowering young farmers', '2024-03-25', 'Conference Center', 100, 'conference');

-- Insert sample news articles
INSERT INTO public.news_articles (title, content, excerpt, author) VALUES
('New Training Programs Launched', 'We are excited to announce the launch of our new training programs for 2024...', 'Discover our latest agricultural training opportunities', 'Dr. Mary Otieno'),
('Success Story: Local Farmer Triples Yield', 'John Ochieng, a graduate of our crop production program, has successfully tripled his maize yield...', 'How proper training transformed a local farm', 'James Mutua'),
('Partnership with County Government', 'Miyare Agricultural Training Center has entered into a new partnership with Migori County Government...', 'Strengthening agricultural education in the region', 'Sarah Akinyi');
