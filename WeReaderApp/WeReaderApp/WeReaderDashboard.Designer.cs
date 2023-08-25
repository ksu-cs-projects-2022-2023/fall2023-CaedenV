namespace WeReaderApp
{
    partial class WeReaderDashboard
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.splitContainer1 = new System.Windows.Forms.SplitContainer();
            this.uxLibraryBtn = new System.Windows.Forms.Button();
            this.uxProfileBtn = new System.Windows.Forms.Button();
            this.uxStoreBtn = new System.Windows.Forms.Button();
            this.uxReaderBtn = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).BeginInit();
            this.splitContainer1.Panel2.SuspendLayout();
            this.splitContainer1.SuspendLayout();
            this.SuspendLayout();
            // 
            // splitContainer1
            // 
            this.splitContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.splitContainer1.Location = new System.Drawing.Point(0, 0);
            this.splitContainer1.Name = "splitContainer1";
            this.splitContainer1.Orientation = System.Windows.Forms.Orientation.Horizontal;
            // 
            // splitContainer1.Panel2
            // 
            this.splitContainer1.Panel2.Controls.Add(this.uxReaderBtn);
            this.splitContainer1.Panel2.Controls.Add(this.uxStoreBtn);
            this.splitContainer1.Panel2.Controls.Add(this.uxProfileBtn);
            this.splitContainer1.Panel2.Controls.Add(this.uxLibraryBtn);
            this.splitContainer1.Size = new System.Drawing.Size(981, 586);
            this.splitContainer1.SplitterDistance = 520;
            this.splitContainer1.TabIndex = 0;
            // 
            // uxLibraryBtn
            // 
            this.uxLibraryBtn.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.uxLibraryBtn.Dock = System.Windows.Forms.DockStyle.Left;
            this.uxLibraryBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.uxLibraryBtn.Location = new System.Drawing.Point(0, 0);
            this.uxLibraryBtn.Name = "uxLibraryBtn";
            this.uxLibraryBtn.Size = new System.Drawing.Size(245, 62);
            this.uxLibraryBtn.TabIndex = 0;
            this.uxLibraryBtn.Text = "Library";
            this.uxLibraryBtn.TextAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.uxLibraryBtn.UseVisualStyleBackColor = true;
            // 
            // uxProfileBtn
            // 
            this.uxProfileBtn.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.uxProfileBtn.Dock = System.Windows.Forms.DockStyle.Right;
            this.uxProfileBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.uxProfileBtn.Location = new System.Drawing.Point(736, 0);
            this.uxProfileBtn.Name = "uxProfileBtn";
            this.uxProfileBtn.Size = new System.Drawing.Size(245, 62);
            this.uxProfileBtn.TabIndex = 1;
            this.uxProfileBtn.Text = "Profile";
            this.uxProfileBtn.TextAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.uxProfileBtn.UseVisualStyleBackColor = true;
            // 
            // uxStoreBtn
            // 
            this.uxStoreBtn.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.uxStoreBtn.Dock = System.Windows.Forms.DockStyle.Right;
            this.uxStoreBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.uxStoreBtn.Location = new System.Drawing.Point(491, 0);
            this.uxStoreBtn.Name = "uxStoreBtn";
            this.uxStoreBtn.Size = new System.Drawing.Size(245, 62);
            this.uxStoreBtn.TabIndex = 2;
            this.uxStoreBtn.Text = "Store";
            this.uxStoreBtn.TextAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.uxStoreBtn.UseVisualStyleBackColor = true;
            // 
            // uxReaderBtn
            // 
            this.uxReaderBtn.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.uxReaderBtn.Dock = System.Windows.Forms.DockStyle.Left;
            this.uxReaderBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.uxReaderBtn.Location = new System.Drawing.Point(245, 0);
            this.uxReaderBtn.Name = "uxReaderBtn";
            this.uxReaderBtn.Size = new System.Drawing.Size(245, 62);
            this.uxReaderBtn.TabIndex = 3;
            this.uxReaderBtn.Text = "Read";
            this.uxReaderBtn.TextAlign = System.Drawing.ContentAlignment.BottomCenter;
            this.uxReaderBtn.UseVisualStyleBackColor = true;
            // 
            // WeReaderDashboard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Ivory;
            this.ClientSize = new System.Drawing.Size(981, 586);
            this.Controls.Add(this.splitContainer1);
            this.Name = "WeReaderDashboard";
            this.Text = "Dashboard";
            this.splitContainer1.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).EndInit();
            this.splitContainer1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private SplitContainer splitContainer1;
        private Button uxReaderBtn;
        private Button uxStoreBtn;
        private Button uxProfileBtn;
        private Button uxLibraryBtn;
    }
}